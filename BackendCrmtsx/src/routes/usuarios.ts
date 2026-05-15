import express from "express";

const rutaUsuarios = express.Router();
rutaUsuarios.post("/login");
rutaUsuarios.post("/register");

export default rutaUsuarios;
