import express, {} from "express";
import dotenv from "dotenv";
// configura dotenv para que funcione en tu aplicación
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000; // Define un puerto predeterminado si no está configurado en .env
app.get("/", (request, response) => {
    response.status(200).send("Hello World");
});
app
    .listen(PORT, () => {
    console.log("Server running at PORT: ", PORT);
})
    .on("error", (error) => {
    // Maneja el error de forma controlada
    throw new Error(error.message);
});
//# sourceMappingURL=index.js.map