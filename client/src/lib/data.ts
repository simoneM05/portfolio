// Code snippets for syntax highlighting
export const goIntroCode = `// TypeScript Node.js code example
import express from 'express';
import { Request, Response } from 'express';

interface Developer {
  name: string;
  title: string;
  skills: string[];
}

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  const me: Developer = {
    name: "Simone Martino",
    title: "Backend Developer",
    skills: ["Node.js", "TypeScript", "Express", "MongoDB"],
  };
  
  res.json({
    message: "Welcome to my portfolio!",
    developer: me
  });
});

app.listen(PORT, () => {
  console.log(\`Server running at http://localhost:\${PORT}\`);
});`;

export const nodeCodeSnippet = `import express from 'express';
import { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api/data', async (req: Request, res: Response) => {
  try {
    const data = await fetchData();
    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

async function fetchData() {
  // Access database or external API
  return { items: ['item1', 'item2'] };
}`;

export const typescriptCodeSnippet = `// TypeScript Express API with Type Safety
import express, { Request, Response } from 'express';

// Define User interface
interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

// Type for creating a new user
type CreateUserDto = Omit<User, 'id'>;

// Simple middleware for type validation
const validateUser = (req: Request, res: Response, next: Function) => {
  const { name, email, role } = req.body;
  
  if (!name || typeof name !== 'string') {
    return res.status(400).json({ error: 'Valid name is required' });
  }
  
  if (!email || !/^[^@]+@[^@]+\.[^@]+$/.test(email)) {
    return res.status(400).json({ error: 'Valid email is required' });
  }
  
  if (role !== 'admin' && role !== 'user') {
    return res.status(400).json({ error: 'Role must be admin or user' });
  }
  
  next();
};

// Create router
const router = express.Router();
const users: User[] = [];
let userId = 1;

// GET /users
router.get('/users', (_req: Request, res: Response) => {
  res.json({ data: users });
});

// POST /users
router.post('/users', validateUser, (req: Request, res: Response) => {
  const userData: CreateUserDto = req.body;
  const newUser: User = { ...userData, id: userId++ };
  
  users.push(newUser);
  res.status(201).json({ data: newUser });
});`;

// Node.js skills with proficiency levels and detailed descriptions
export const nodeSkills = [
  { 
    name: "Express.js", 
    percentage: 95, 
    description: "Extensive experience building RESTful APIs, middleware development, and application architecture with Express.js."
  },
  { 
    name: "TypeScript", 
    percentage: 90, 
    description: "Strong expertise in type systems, interfaces, generics, and advanced TypeScript patterns for robust application development."
  },
  { 
    name: "RESTful APIs", 
    percentage: 88, 
    description: "Designed and implemented scalable RESTful services following industry best practices and API standards."
  },
  { 
    name: "MongoDB", 
    percentage: 90, 
    description: "Proficient in MongoDB schema design, aggregation pipeline, indexing strategies, and performance optimization."
  },
  { 
    name: "Jest", 
    percentage: 80, 
    description: "Experience in unit, integration, and end-to-end testing using Jest and related testing libraries."
  },
  { 
    name: "Redis", 
    percentage: 75, 
    description: "Knowledge of using Redis for caching, session management, rate limiting, and real-time data handling."
  },
];

// TypeScript skills with proficiency levels and detailed descriptions
export const tsSkills = [
  { 
    name: "Type Systems", 
    percentage: 90, 
    description: "Deep understanding of TypeScript's structural type system, inference capabilities, and configuration options."
  },
  { 
    name: "Interfaces", 
    percentage: 95, 
    description: "Expertise in designing clean, extensible interface hierarchies for maximum code reuse and maintainability."
  },
  { 
    name: "Generics", 
    percentage: 85, 
    description: "Skilled in implementing flexible, reusable generic types and functions for type-safe components."
  },
  { 
    name: "Decorators", 
    percentage: 80, 
    description: "Experience with TypeScript decorators for metadata reflection, dependency injection, and cross-cutting concerns."
  },
  { 
    name: "OOP Patterns", 
    percentage: 90, 
    description: "Proficient in applying object-oriented design patterns like Factory, Singleton, Strategy, and Observer."
  },
  { 
    name: "API Design", 
    percentage: 85, 
    description: "Strong focus on creating strongly-typed, self-documenting APIs with comprehensive error handling."
  },
];

// Additional skills with icons and descriptions
export const additionalSkills = [
  { 
    name: "SQL & NoSQL", 
    icon: "fas fa-database",
    description: "Experience with both relational (PostgreSQL, MySQL) and NoSQL (MongoDB, DynamoDB) database systems." 
  },
  { 
    name: "Docker", 
    icon: "fab fa-docker",
    description: "Proficient in containerizing applications, creating Docker Compose stacks, and deployment strategies." 
  },
  { 
    name: "Microservices", 
    icon: "fas fa-network-wired",
    description: "Designed and implemented microservice architectures with service discovery, API gateways, and event-driven patterns." 
  },
  { 
    name: "Security", 
    icon: "fas fa-shield-alt",
    description: "Knowledge of web security best practices, auth implementations, OWASP guidelines, and secure coding principles." 
  },
];

// Projects data
export const projects = [
  {
    title: "Microservice API Platform",
    description:
      "A scalable microservice architecture built with Node.js, Express, and MongoDB. Features JWT authentication, rate limiting, and API documentation.",
    image: "microservice-api.jpg",
    demoLink: "https://github.com/",
    codeLink: "https://github.com/",
    technologies: ["Express.js", "MongoDB", "Docker", "JWT"],
    category: "nodejs" as const,
  },
  {
    title: "TypeScript REST API",
    description:
      "A complete REST API built with TypeScript, Express, and MongoDB. Implements SOLID principles and advanced TypeScript features.",
    image: "typescript-api.jpg",
    demoLink: "https://github.com/",
    codeLink: "https://github.com/",
    technologies: ["TypeScript", "Express", "MongoDB", "Jest"],
    category: "nodejs" as const,
  },
  {
    title: "Serverless E-commerce API",
    description:
      "Serverless e-commerce API built with Node.js. Includes product catalog, cart management, and order processing.",
    image: "serverless-ecommerce.jpg",
    demoLink: "https://github.com/",
    codeLink: "https://github.com/",
    technologies: ["Node.js", "Express", "MongoDB", "Redis"],
    category: "nodejs" as const,
  },
  {
    title: "Real-time Chat Application",
    description:
      "Full-stack chat application with real-time messaging using Socket.IO, Express, and React. Features user authentication and message history.",
    image: "chat-app.jpg",
    demoLink: "https://github.com/",
    codeLink: "https://github.com/",
    technologies: ["Socket.IO", "Express", "React", "MongoDB"],
    category: "nodejs" as const,
  },
  {
    title: "GraphQL API Gateway",
    description:
      "A GraphQL API gateway that consolidates multiple microservices into a single, coherent API. Built with Apollo Server and Node.js.",
    image: "graphql-gateway.jpg",
    demoLink: "https://github.com/",
    codeLink: "https://github.com/",
    technologies: ["Apollo", "GraphQL", "Node.js", "Redis"],
    category: "nodejs" as const,
  },
  {
    title: "Express TypeScript Backend",
    description:
      "Enterprise-grade backend application built with Express and TypeScript. Implements clean architecture, repository pattern, and comprehensive testing.",
    image: "express-app.jpg",
    demoLink: "https://github.com/",
    codeLink: "https://github.com/",
    technologies: ["Express", "TypeScript", "PostgreSQL", "Docker"],
    category: "nodejs" as const,
  },
];
