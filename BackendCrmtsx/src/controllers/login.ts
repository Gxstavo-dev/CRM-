// tipados
import type { Request, Response } from "express";
import type { Usuario } from "../types/usuarios";

import { existeUsuario } from "./auth/existeUsuario";

// en este caso en login solo necesitamos primero el email y luego la contraseña
export const login = async (req: Request, res: Response) => {
  const { email } = req.body;
  console.log(email);

  // verificar si existe el usuario
  const existe = await existeUsuario(email);

  // si no existe mandamos error
  if (!existe) {
    return res
      .status(400)
      .json({ status: "Error", mensaje: "No existe usuario con este email" });
  }
};
