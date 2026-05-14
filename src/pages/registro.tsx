import Form from "../components/ui/form"; // para usar el componente form (formulario)
import Inputs from "../components/ui/inputs"; // para usar el componente inputs
import Buttons from "../components/ui/buttons"; // para usar el componente boton

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
        <div className="w-2/4 h-12 flex items-center">
          <p className="text-[12px]">
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
        </div>
      </Form>
    </div>
  );
}
