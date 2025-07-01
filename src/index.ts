import express, { Request, Response } from "express";

export const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Basic route
app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Welcome to the API!" });
});

// Another route
app.get("/data", (req: Request, res: Response) => {
  const data = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
  ];
  res.json(data);
});
