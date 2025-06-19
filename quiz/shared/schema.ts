import { pgTable, text, serial, integer, boolean, jsonb, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const quizLeads = pgTable("quiz_leads", {
  id: serial("id").primaryKey(),
  petName: text("pet_name").notNull(),
  userEmail: text("user_email").notNull(),
  answers: jsonb("answers").notNull(),
  diagnosis: jsonb("diagnosis"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertQuizLeadSchema = createInsertSchema(quizLeads).pick({
  petName: true,
  userEmail: true,
  answers: true,
  diagnosis: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertQuizLead = z.infer<typeof insertQuizLeadSchema>;
export type QuizLead = typeof quizLeads.$inferSelect;
