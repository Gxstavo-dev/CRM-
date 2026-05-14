import { useState, useRef } from "react"; // para interactuar con los estados del dom
import type { MouseEvent } from "react"; // manejo de eventos

export default function Navbar() {
  const links: string[] = ["Inicio", "Login", "Registro"]; // para manejarlo de manera mas sencilla de editarlo
  const [visible, setVisible] = useState(false); // de manera determinada iniciara en falso
  const [style, setStyle] = useState({ left: 0, top: 0, width: 0, height: 0 }); // para agregar estilos para el span que tendra posicion absoluta para que siga el mouse entre los links
  const navbar = useRef<HTMLUListElement>(null); // los elementos li dentro de la lista ul
  const [contenido, setContenido] = useState("");

  // funcion para saber en donde esta el mouse dentro del nav
  const eventoMouse = (e: MouseEvent<HTMLLIElement>) => {
    const nav = navbar.current; // para seleccionar el nav
    const activo = e.currentTarget; // console.log(activo); => para conocer que indice esta activo
    const navReact = nav!.getBoundingClientRect(); // obtener su posicion
    const liPosicion = activo.getBoundingClientRect(); // obtener la posicion del componente

    // darle estilos en este caso solo es la posicion de actual izquierda y ancho
    setStyle({
      left: liPosicion.left - navReact.left,
      top: liPosicion.top,
      width: liPosicion.width,
      height: liPosicion.height,
    });

    setVisible(true); // para mostrarlo
  };

  return (
    <div className="w-full h-12 flex justify-center items-center gap-10">
      <p className="p-1.5 font-roboto text-[12px]">Miukon</p>
      <ul
        ref={navbar}
        className="w-3xs h-full flex justify-center items-center gap-6 relative"
        onMouseLeave={() => {
          setVisible(false);
          setContenido("");
        }} // si se sale del nav lo detecte de nuevo como null
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
              onClick={(e: MouseEvent) => {
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
