import prisma from "../../lib/prisma"; // objeto para realizar las consultas
import type { Usuario } from "../../types/usuarios";

// Funcion para comprobar si existe el usuario
export async function existeUsuario(email: string) {
  const usuario = await prisma.user.findUnique({
    // para encontrar con key unique
    where: { email: email }, // condicion
  });
  return usuario as Usuario | null; // si existe retornara el email del usuario o si no envia null
}
