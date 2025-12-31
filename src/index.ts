import express, { json, type Request, type Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import * as endpoint from "./endpoints.ts";
import { get } from "node:http";

// configura dotenv para que funcione en tu aplicación
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

//Rutas get
app.get("/words", endpoint.getWords);
app.get("/words/:category", endpoint.getWordByCategory);
app.get("/random", endpoint.getRandomWord);
app.get("/categories", endpoint.getCategories);
app.get("/clues", endpoint.getClues);

app
  .listen(PORT, () => {
    console.log("Server running at PORT: ", PORT);
  })
  .on("error", (error) => {
    // Maneja el error de forma controlada
    throw new Error(error.message);
  });
