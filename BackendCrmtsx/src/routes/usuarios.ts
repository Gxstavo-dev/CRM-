import express from "express";
import { login } from "../controllers/login";
import { registro } from "../controllers/registro";

const rutaUsuarios = express.Router();
rutaUsuarios.post("/login", login);
rutaUsuarios.post("/register", registro);

export default rutaUsuarios;
