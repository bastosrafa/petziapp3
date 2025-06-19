import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertQuizLeadSchema } from "@shared/schema";
import { z } from "zod";
import { addLeadToMailchimp, testMailchimpConnection, type LeadData } from "./mailchimp";
import { conversionTracker, ConversionTracker } from "./tracking";

export async function registerRoutes(app: Express): Promise<Server> {
  // Quiz lead submission endpoint
  app.post("/api/quiz-leads", async (req, res) => {
    try {
      const validatedData = insertQuizLeadSchema.parse(req.body);
      
      // Generate diagnosis based on answers
      const diagnosis = generateDiagnosis(validatedData.answers as Record<string, any>);
      
      // Store lead locally
      const lead = await storage.createQuizLead({
        ...validatedData,
        diagnosis,
      });

      // Prepare data for Mailchimp integration
      const leadData: LeadData = {
        email: validatedData.userEmail,
        petName: validatedData.petName,
        firstName: extractFirstName(validatedData.petName), // Extract from petName if needed
        answers: validatedData.answers as Record<number, any>,
        diagnosis,
        quizCompletedAt: new Date().toISOString(),
        userAgent: req.headers['user-agent'],
        ipAddress: getClientIp(req)
      };

      // Track conversion event
      const sessionId = req.headers['x-session-id'] as string || ConversionTracker.generateSessionId();
      await conversionTracker.trackQuizFunnel('email_capture', sessionId, {
        email: validatedData.userEmail,
        petName: validatedData.petName,
        answers: validatedData.answers
      });

      // Add to Mailchimp asynchronously
      addLeadToMailchimp(leadData).then(result => {
        if (result.success) {
          console.log(`✅ Lead successfully added to Mailchimp: ${validatedData.userEmail}`);
        } else {
          console.error(`❌ Mailchimp integration failed: ${result.error}`);
        }
      }).catch(error => {
        console.error('Mailchimp async error:', error);
      });
      
      res.json({ success: true, lead });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid data", details: error.errors });
      } else {
        console.error('Quiz lead submission error:', error);
        res.status(500).json({ error: "Internal server error" });
      }
    }
  });

  // Track conversion events
  app.post("/api/track", async (req, res) => {
    try {
      const { eventType, sessionId, metadata } = req.body;
      
      await conversionTracker.trackQuizFunnel(eventType, sessionId, {
        ...metadata,
        userAgent: req.headers['user-agent'],
        ipAddress: getClientIp(req),
        timestamp: new Date().toISOString()
      });
      
      res.json({ success: true });
    } catch (error) {
      console.error('Tracking error:', error);
      res.status(500).json({ error: "Tracking failed" });
    }
  });

  // Test Mailchimp connection
  app.get("/api/test-mailchimp", async (req, res) => {
    try {
      const result = await testMailchimpConnection();
      res.json(result);
    } catch (error) {
      res.status(500).json({ success: false, error: "Connection test failed" });
    }
  });

  // Get quiz lead by email
  app.get("/api/quiz-leads/:email", async (req, res) => {
    try {
      const lead = await storage.getQuizLeadByEmail(req.params.email);
      if (!lead) {
        return res.status(404).json({ error: "Lead not found" });
      }
      res.json(lead);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

// Helper functions
function extractFirstName(petName: string): string {
  // Try to extract owner name from pet name if provided in format "Nome do Pet - Dono"
  if (petName.includes(' - ')) {
    return petName.split(' - ')[1] || '';
  }
  return '';
}

function getClientIp(req: any): string {
  return req.headers['x-forwarded-for'] || 
         req.connection?.remoteAddress || 
         req.socket?.remoteAddress ||
         req.ip || 
         'unknown';
}

function generateDiagnosis(answers: Record<string, any>) {
  const diagnosis = {
    behavior: "Necessita rotina + reforço positivo",
    stimulus: "Baixo estímulo mental e físico",
    health: "Possível falta de organização em vacinas e vermífugos",
    owner: "Sobrecarregado, sem saber por onde começar"
  };

  // Customize diagnosis based on answers
  if (answers[4] === "Nunca tentei") {
    diagnosis.behavior = "Precisa de introdução ao adestramento básico";
  } else if (answers[4] === "Sim, com profissional") {
    diagnosis.behavior = "Pode precisar de reforços pontuais";
  }

  if (answers[9] === "2x ou mais" && answers[11] === "Sim") {
    diagnosis.stimulus = "Boa rotina de estímulos, manter consistência";
  } else if (answers[9] === "Nenhuma") {
    diagnosis.stimulus = "Necessita urgentemente de atividade física";
  }

  if (answers[14] === "Sim" && answers[15] === "Sim, sempre") {
    diagnosis.health = "Boa organização dos cuidados de saúde";
  } else if (answers[14] === "Não sei") {
    diagnosis.health = "Necessita organização urgente dos registros de saúde";
  }

  if (answers[18] === "Não" && answers[19] === "Sim, com certeza") {
    diagnosis.owner = "Motivado e pronto para seguir um plano estruturado";
  } else if (answers[18] === "Sim") {
    diagnosis.owner = "Precisa de apoio emocional e orientação clara";
  }

  return diagnosis;
}
