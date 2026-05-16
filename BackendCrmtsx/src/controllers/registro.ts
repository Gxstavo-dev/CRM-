// importamos los tipos de express para el request y el response
import type { Request, Response } from "express";
// importamos prisma para conectarnos a la base de datos
import prisma from "../lib/prisma";
// importamos bcrypt para encriptar la contrasña
import bcrypt from "bcryptjs";

// funcion que se ejecuta cuando alguien se registra
export const registro = async (req: Request, res: Response) => {
  // sacamos el email y password del formulario que envio el frontend
  const { email, password } = req.body;

  // si no mandaron email o password, mandamos error
  if (!email || !password)
    return res
      .status(400)
      .json({ status: "Error", mensaje: "Faltan credenciales" });

  // revisamos que el email tenga un formato valido con un regex
  // el regex checkea que tenga algo@algo.algo
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email))
    return res
      .status(400)
      .json({ status: "Error", mensaje: "Formato de email invalido" });

  // la contrasena no puede ser tan corta minimo 6 caracteres
  if (password.length < 6)
    return res.status(400).json({
      status: "Error",
      mensaje: "La contrasena debe tener al menos 6 caracteres",
    });

  // intentamos crear el usuario
  try {
    // encriptamos la contrasena 10 veces para que no se guarde en texto plano
    const hashPass = await bcrypt.hash(password, 10);

    // creamos el usuario en la base de datos con prisma
    const usuario = await prisma.user.create({
      data: {
        email, // el email que mando el usuario
        password: hashPass, // guardamos la contrasena encriptada no la original
        rol: "USER", // por defecto todos son USER, luego se puede cambiar a ADMIN
      },
      omit: {
        password: true, // le decimos a prisma que no nos devuelva la contrasena
      },
    });

    // si todo salio bien devolvemos el usuario creado con status 201 (creado)
    return res.status(201).json({ status: "Ok", user: usuario });
  } catch (error) {
    // si el error es P2002 significa que el email ya existe en la base de datos
    // prisma tira este codigo cuando se viola una constraint unique
    if ((error as any)?.code === "P2002") {
      return res.status(400).json({
        status: "Error",
        mensaje: "Ya existe un usuario con este email",
      });
    }

    // si es otro error lo mostramos en la consola para debuggear
    console.error("Error al crear cuenta:", error);
    // devolvemos error 500 porque es algo que fallo del servidor
    return res
      .status(500)
      .json({ status: "Error", mensaje: "Error interno del servidor" });
  }
};
