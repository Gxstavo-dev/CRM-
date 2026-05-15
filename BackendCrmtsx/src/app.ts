import express from "express";
import rutaUsuarios from "./routes/usuarios";

const app = express();
app.use(express.json()); // leer datos JSON que son enviados desde el frontend
app.use("/api", rutaUsuarios); // para usuarios
export default app;
