// Importa el cliente generado por Prisma en la carpeta output configurada
import { PrismaClient } from "../generated/prisma/client.ts";
// Importa el adaptador de PostgreSQL para que Prisma pueda conectarse a la DB
import { PrismaPg } from "@prisma/adapter-pg";

// Crea el adaptador con la URL de conexion de la base de datos
const adapter = new PrismaPg({
  connectionString: Bun.env.DATABASE_URL!,
});

// Crea la instancia de Prisma usando el adaptador de PostgreSQL
const prisma = new PrismaClient({ adapter });

// Exporta la instancia para usarla en cualquier parte del proyecto
export default prisma;
