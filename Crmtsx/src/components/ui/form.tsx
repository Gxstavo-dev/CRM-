import type { forms } from "../../interface/forms"; // tipado para los formularios

// componente formulario reutilizable para registro y login
export default function Form({ titulo, descripcion, children }: forms) {
  return (
    <form className="w-2/4 h-125 flex flex-col justify-center items-center">
      <div className="w-full h-1/5 flex justify-center items-center flex-col gap-5">
        <p className="text-2xl">{titulo}</p>
        <p className="text-gray-400">{descripcion}</p>
      </div>
      <div className="w-full flex-1 flex flex-col gap-3 items-center ">
        {
          children /* para poder imprimir todos los inputs que pondremos y el boton */
        }
      </div>
    </form>
  );
}
