import type { Inputs } from "../../interface/inputs"; // para controlar el contenido que tendra los inputs

// componente inputs genericos para los formularios con su tipado
export default function Inputs({ placeholder, type, name }: Inputs) {
  return (
    <div className="w-2/4 h-15  flex items-center justify-center">
      <input
        className="w-full h-full bg-slate-100 text-black p-3 rounded-2xl"
        placeholder={placeholder} // texto que se muestra cuando no hay contenido ingresado por el usuario
        type={type} // solo existen dos tipos email y password
        name={name} // para obtenerlo desde el backend
        required={true} // si o si tiene que escribir en los inputs
      />
    </div>
  );
}
