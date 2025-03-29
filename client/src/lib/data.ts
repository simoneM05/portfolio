// Code snippets for syntax highlighting
export const goIntroCode = `package main

import (
    "fmt"
)

type Developer struct {
    Name     string
    Title    string
    Skills   []string
    YearsExp int
}

func main() {
    me := Developer{
        Name:     "John Doe",
        Title:    "Backend Developer",
        Skills:   []string{"Go", "Node.js", "Docker", "Kubernetes"},
        YearsExp: 8,
    }
    
    fmt.Println("Welcome to my portfolio!")
    fmt.Printf("I'm %s, a %s with %d years of experience.\\n",
        me.Name, me.Title, me.YearsExp)
}`;

export const nodeCodeSnippet = `const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api/data', async (req, res) => {
  try {
    const data = await fetchData();
    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      error: error.message 
    });
  }
});`;

export const goCodeSnippet = `package main

import (
    "net/http"
    
    "github.com/gin-gonic/gin"
)

func main() {
    router := gin.Default()
    
    router.GET("/api/users", getUsers)
    router.POST("/api/users", createUser)
    
    router.Run(":8080")
}

func getUsers(c *gin.Context) {
    c.JSON(http.StatusOK, gin.H{
        "status": "success",
        "data":   users,
    })
}`;

// Node.js skills with proficiency levels
export const nodeSkills = [
  { name: "Express.js", percentage: 95 },
  { name: "NestJS", percentage: 90 },
  { name: "GraphQL", percentage: 85 },
  { name: "MongoDB", percentage: 90 },
  { name: "Jest", percentage: 80 },
  { name: "Redis", percentage: 75 },
];

// Go skills with proficiency levels
export const goSkills = [
  { name: "Gin", percentage: 90 },
  { name: "gRPC", percentage: 85 },
  { name: "PostgreSQL", percentage: 90 },
  { name: "Docker", percentage: 95 },
  { name: "Testing", percentage: 80 },
  { name: "Kubernetes", percentage: 75 },
];

// Additional skills with icons
export const additionalSkills = [
  { name: "SQL & NoSQL", icon: "fas fa-database" },
  { name: "AWS", icon: "fas fa-cloud" },
  { name: "Docker", icon: "fab fa-docker" },
  { name: "Microservices", icon: "fas fa-network-wired" },
  { name: "CI/CD", icon: "fas fa-server" },
  { name: "Security", icon: "fas fa-shield-alt" },
];

// Projects data
export const projects = [
  {
    title: "Microservice API Platform",
    description: "A scalable microservice architecture built with Node.js, Express, and MongoDB. Features JWT authentication, rate limiting, and API documentation.",
    image: "microservice-api.jpg",
    demoLink: "https://github.com/",
    codeLink: "https://github.com/",
    technologies: ["Express.js", "MongoDB", "Docker", "JWT"],
    category: "nodejs" as const,
  },
  {
    title: "Real-time Data Pipeline",
    description: "High-performance data processing pipeline built with Go. Handles over 10,000 events per second with minimal latency.",
    image: "data-pipeline.jpg",
    demoLink: "https://github.com/",
    codeLink: "https://github.com/",
    technologies: ["Go", "Kafka", "PostgreSQL", "gRPC"],
    category: "go" as const,
  },
  {
    title: "Serverless E-commerce API",
    description: "Serverless e-commerce API built with AWS Lambda and Node.js. Includes product catalog, cart management, and order processing.",
    image: "serverless-ecommerce.jpg",
    demoLink: "https://github.com/",
    codeLink: "https://github.com/",
    technologies: ["AWS Lambda", "DynamoDB", "API Gateway", "Serverless"],
    category: "nodejs" as const,
  },
  {
    title: "Kubernetes Monitoring Tool",
    description: "A Kubernetes monitoring tool built with Go. Provides real-time metrics, alerts, and visualization of cluster performance.",
    image: "k8s-monitoring.jpg",
    demoLink: "https://github.com/",
    codeLink: "https://github.com/",
    technologies: ["Go", "Kubernetes", "Prometheus", "Grafana"],
    category: "go" as const,
  },
  {
    title: "GraphQL API Gateway",
    description: "A GraphQL API gateway that consolidates multiple microservices into a single, coherent API. Built with Apollo Server and Node.js.",
    image: "graphql-gateway.jpg",
    demoLink: "https://github.com/",
    codeLink: "https://github.com/",
    technologies: ["Apollo", "GraphQL", "Node.js", "Redis"],
    category: "nodejs" as const,
  },
  {
    title: "Blockchain Integration API",
    description: "An API for integrating blockchain technologies into existing applications. Built with Go and supports multiple blockchain networks.",
    image: "blockchain-api.jpg",
    demoLink: "https://github.com/",
    codeLink: "https://github.com/",
    technologies: ["Go", "Ethereum", "Solidity", "Web3"],
    category: "go" as const,
  },
];
