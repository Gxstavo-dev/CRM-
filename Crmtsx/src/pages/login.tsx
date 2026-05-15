import Form from "../components/ui/form"; // para usar el componente form (formulario)
import Inputs from "../components/ui/inputs"; // para usar el componente inputs
import Buttons from "../components/ui/buttons"; // para usar el componente boton

/* iconos  */
import { FaGithub } from "react-icons/fa";

export default function Login() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Form titulo="Login" descripcion="Bienvenido de vuelta">
        {/* input para email */}
        <Inputs placeholder="Escribe un email" type="email" name="email" />

        {/* boton que enviara el form */}
        <Buttons text="Continuar" type="submit" />
        {/* ------- */}
        <div className="w-2/4 h-12 flex items-center flex-col gap-5 text-[12px]">
          <p className=" flex gap-5">
            Aun no tienes una cuenta?{" "}
            <a
              className="cursor-pointer text-blue-600"
              onClick={() => {
                window.location.href = "/registro";
              }}
            >
              {" "}
              Clic aqui
            </a>
          </p>
          <button className="p-4 w-80 bg-black rounded-2xl text-white flex items-center justify-center  gap-5 cursor-pointer">
            <FaGithub />
            Iniciar sesion con Github
          </button>
        </div>
      </Form>
    </div>
  );
}
