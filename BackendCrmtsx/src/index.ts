import app from "./app";
const PORT = Bun.env.PORT || 3002; // si no lee el puerto creado en .env por defecto tendra 3002

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
