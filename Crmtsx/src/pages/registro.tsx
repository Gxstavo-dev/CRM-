import Form from "../components/ui/form"; // para usar el componente form (formulario)
import Inputs from "../components/ui/inputs"; // para usar el componente inputs
import Buttons from "../components/ui/buttons"; // para usar el componente boton

/* iconos  */
import { FaGithub } from "react-icons/fa";

export default function Registro() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Form
        titulo="Registro"
        descripcion="Crea una cuenta para comenzar a utilizar la app"
      >
        {/* input para email */}
        <Inputs placeholder="Escribe un email" type="email" name="email" />
        {/* input para contraseña */}
        <Inputs
          placeholder="Escribe un contraseña"
          type="password"
          name="password"
        />
        {/* boton que enviara el form */}
        <Buttons text="Entrar" type="submit" />
        <div className="w-2/4 h-12 flex items-center flex-col gap-5  text-[12px]">
          <p>
            Ya tienes una cuenta?{" "}
            <a
              className="cursor-pointer text-blue-600"
              onClick={() => {
                window.location.href = "/login";
              }}
            >
              Clic aqui
            </a>
          </p>
          <p>Puedes crear tu cuenta con Github</p>
          <button className="p-4 w-80 bg-black rounded-2xl text-white flex items-center justify-center  gap-5 cursor-pointer">
            <FaGithub />
            Crear cuenta con Github
          </button>
        </div>
      </Form>
    </div>
  );
}
