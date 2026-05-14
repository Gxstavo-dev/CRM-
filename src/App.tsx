import { Route, Routes } from "react-router-dom"; // para crear las rutas que manejaremos
import { Index } from "./pages";
import Login from "./pages/login";
import Registro from "./pages/registro";

export default function App() {
  return (
    // para definir las rutas del frontend
    <Routes>
      {/* ruta para index.html */}
      <Route path="/" element={<Index />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/registro" element={<Registro />}></Route>
    </Routes>
  );
}
