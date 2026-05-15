// Roles para el usuarios
enum ROLES {
  ADMIN = "admin",
  USER = "user",
}

// tipo para usuarios
export interface Usuario {
  id: number;
  supabaseId?: string; // opcional si no entra con github
  name?: string; // opcional el nombre
  email: string;
  password: string;
  position?: string; // puesto del usuario Dev senior,PM etc etc
  createdAt: string; // fecha de creacion
  rol: ROLES; // solo tendra dos roles como admin o user por default estara en user
}
