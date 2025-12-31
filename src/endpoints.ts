import { type Request, type Response } from "express";
import pool from "./db.ts";

//Endpoint para obtener todas las palabras con sus pistas asociadas
export const getWords = async (req: Request, res: Response) => {
  try {
    const [rows] = await pool.query(
      "SELECT words.id, words.word, clues.clue AS clue, categories.category AS categroy FROM words INNER JOIN clues ON words.clueId = clues.id INNER JOIN categories ON words.categotyId = categories.id"
    );

    res.status(200).json(rows);
  } catch (error) {
    console.error("Error al obtener las palabras:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

//Endpoint para obtener una palabra aleatoria por categoría con su pista asociada
export const getWordByCategory = async (req: Request, res: Response) => {
  const category = req.params.category;

  try {
    const [rows] = await pool.query(
      "SELECT words.word, clues.clue AS clue, categories.category AS category FROM words INNER JOIN clues ON words.clueId = clues.id INNER JOIN categories ON words.categotyId = categories.id WHERE words.categotyId = ? ORDER BY RAND() LIMIT 1",
      [category]
    );

    res.status(200).json(rows);
  } catch (error) {
    console.error("Error al obtener las palabras por categoría:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

//Endpoint para obtener una palabra aleatoria con su pista asociada
export const getRandomWord = async (req: Request, res: Response) => {
  try {
    const [rows] = await pool.query(
      "SELECT words.word, clues.clue AS clue, categories.category AS category FROM words INNER JOIN clues ON words.clueId = clues.id INNER JOIN categories ON words.categotyId = categories.id ORDER BY RAND() LIMIT 1"
    );

    res.status(200).json(rows);
  } catch (error) {
    console.error("Error al obtener una palabra aleatoria:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

//Endpoint para obtener todas las categorías
export const getCategories = async (req: Request, res: Response) => {
  try {
    const [rows] = await pool.query("SELECT * FROM categories");

    res.status(200).json(rows);
  } catch (error) {
    console.error("Error al obtener las categorías:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

//Endpoint para obtener todas las pistas
export const getClues = async (req: Request, res: Response) => {
  try {
    const [rows] = await pool.query(
      "SELECT clues.id, clues.clue, words.word As word FROM clues INNER JOIN words ON clues.id = words.clueId"
    );

    res.status(200).json(rows);
  } catch (error) {
    console.error("Error al obtener las pistas:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};
