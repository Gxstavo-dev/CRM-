import { Route, Routes } from "react-router-dom"; // para crear las rutas que manejaremos
import { Index } from "./pages";

export default function App() {
  return (
    // para definir las rutas del frontend
    <Routes>
      {/* ruta para index.html */}
      <Route path="/" element={<Index />}></Route>
    </Routes>
  );
}
