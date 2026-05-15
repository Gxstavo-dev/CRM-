import express from "express";

const app = express();
app.use(express.json()); // leer datos JSON que son enviados desde el frontend

export default app;
