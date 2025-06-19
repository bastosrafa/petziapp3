import { users, quizLeads, type User, type InsertUser, type QuizLead, type InsertQuizLead } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Quiz lead methods
  createQuizLead(lead: InsertQuizLead): Promise<QuizLead>;
  getQuizLead(id: number): Promise<QuizLead | undefined>;
  getQuizLeadByEmail(email: string): Promise<QuizLead | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private quizLeads: Map<number, QuizLead>;
  private currentUserId: number;
  private currentLeadId: number;

  constructor() {
    this.users = new Map();
    this.quizLeads = new Map();
    this.currentUserId = 1;
    this.currentLeadId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createQuizLead(insertLead: InsertQuizLead): Promise<QuizLead> {
    const id = this.currentLeadId++;
    const lead: QuizLead = {
      ...insertLead,
      id,
      createdAt: new Date(),
      diagnosis: insertLead.diagnosis || null,
    };
    this.quizLeads.set(id, lead);
    return lead;
  }

  async getQuizLead(id: number): Promise<QuizLead | undefined> {
    return this.quizLeads.get(id);
  }

  async getQuizLeadByEmail(email: string): Promise<QuizLead | undefined> {
    return Array.from(this.quizLeads.values()).find(
      (lead) => lead.userEmail === email,
    );
  }
}

export const storage = new MemStorage();
