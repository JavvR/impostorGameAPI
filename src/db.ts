import mysql from "mysql2/promise";
import dotenv from "dotenv";

// configura dotenv para que funcione en tu aplicación
dotenv.config();

const db = mysql.createPool({
  host: process.env.DB_HOST as string,
  user: process.env.DB_USER as string,
  password: process.env.DB_PASSWORD as string,
  database: process.env.DB_NAME as string,
  port: 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default db;
