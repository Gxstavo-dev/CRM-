import { useResaltadoNav } from "../../../hooks/useResaltadoNav";
import type { MouseEvent } from "react"; // manejo de eventos

export default function Navbar() {
  const { navbar, links, style, visible, eventoMouse, mouseFuera } =
    useResaltadoNav(["Inicio", "Login", "Registro"]);

  return (
    <div className="w-full h-12 flex justify-center items-center gap-10">
      <p className="p-1.5 font-roboto text-[12px]">Miukon</p>
      <ul
        ref={navbar}
        onMouseLeave={mouseFuera}
        className="w-3xs h-full flex justify-center items-center gap-6 relative"
      >
        {visible && (
          // estilos para el span si es que es true el estado
          <span
            className="absolute inset-y-1 z-0 rounded-md bg-slate-300/30  transition-all duration-200 ease-out"
            style={{
              left: style.left,
              top: style.top,
              width: style.width,
              height: style.height,
            }}
          />
        )}

        {/* recorrer la lista para poder pasarselos a los li y su indice */}
        {links.map((link, index) => {
          return (
            <li
              key={index} // clave unica
              className="text-[12px] cursor-pointer w-24 bg-transparent z-10 text-center p-0.75"
              onMouseEnter={eventoMouse} // le pasamos el indice activo
              onClick={(e: MouseEvent<HTMLLIElement>) => {
                const presionado = e.currentTarget; // obtener el li presionado
                const texto = presionado.textContent; // obtener el texto de ese li

                // dependiendo del contenido es a donde se va a redireccionar al usuario
                switch (texto) {
                  case "Inicio":
                    window.location.href = "/";
                    break;
                  case "Login":
                    window.location.href = "/login";
                    break;
                  case "Registro":
                    window.location.href = "/registro";
                    break;
                  default:
                    console.log("Indice no existe");
                    break;
                }
              }}
            >
              {link}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
