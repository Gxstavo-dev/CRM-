import { useState, useRef } from "react"; // para interactuar con los estados del dom
import type { MouseEvent } from "react"; // manejo de eventos

// este hook tendra como paramatro un array tipo string para poder reutilizar este hook en proximos navbars
export function useResaltadoNav(links: string[]) {
  const [visible, setVisible] = useState(false); // de manera determinada iniciara en falso
  const [style, setStyle] = useState({ left: 0, top: 0, width: 0, height: 0 }); // para agregar estilos para el span que tendra posicion absoluta para que siga el mouse entre los links
  const navbar = useRef<HTMLUListElement>(null); // los elementos li dentro de la lista ul

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

  const mouseFuera = () => setVisible(false);

  return {
    links,
    visible,
    style,
    navbar,
    setVisible,
    eventoMouse,
    mouseFuera,
  };
}
