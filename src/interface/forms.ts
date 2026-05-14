export interface forms {
  // para controlar el contenido de los forms
  titulo: string;
  descripcion: string;
  textoBoton?: string;
  children: React.ReactNode; // para poder agregar mas componentes que tengan props
}
