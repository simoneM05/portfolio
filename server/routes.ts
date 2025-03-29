import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // Validate the incoming data
      const contactData = insertContactSchema.parse(req.body);
      
      // Store the contact message
      const contact = await storage.createContact(contactData);
      
      res.status(201).json({
        message: "Message sent successfully",
        contactId: contact.id,
      });
    } catch (error) {
      if (error instanceof ZodError) {
        // Handle validation errors
        const validationError = fromZodError(error);
        res.status(400).json({
          message: "Validation error",
          errors: validationError.details,
        });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({
          message: "Failed to send message. Please try again later.",
        });
      }
    }
  });

  // Get all contact submissions (for admin purposes, in a real app this would be protected)
  app.get("/api/contacts", async (_req: Request, res: Response) => {
    try {
      const contacts = await storage.getAllContacts();
      res.json(contacts);
    } catch (error) {
      console.error("Error fetching contacts:", error);
      res.status(500).json({
        message: "Failed to retrieve contacts",
      });
    }
  });

  // Create HTTP server
  const httpServer = createServer(app);

  return httpServer;
}
