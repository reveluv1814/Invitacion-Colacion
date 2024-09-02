import Ticket from "@/components/ui/ticket";
import { useTheme } from "@/components/ThemeProvider";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import toast, { Toaster } from "react-hot-toast";
import BallonSvg from "@/components/ui/ballonSvg";
import { useNavigate } from "react-router-dom";
import { House } from "lucide-react";
import ConfettiE from "@/components/ui/confetti";

const Evento = () => {
  const { theme } = useTheme();
  const [flag, setFlag] = useState(false);
  const [nombre, setNombre] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    setNombre(formData.get("Nombres") as string);
    try {
      setLoading(true);
      const formElement = event.target as HTMLFormElement;
      const response = await fetch(formElement.action, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        await response.text();
        setFlag(true);
        toast.success("¡Gracias por registrarte! Nos vemos en el evento 🥳.");
        formElement.reset();
      } else {
        toast.error("Upps! Algo salió mal. Por favor intenta de nuevo.");
      }
    } catch (error) {
      toast.error("Upps! Algo salió mal. Por favor intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  const FormEvento = () => {
    return (
      <div className="space-y-5 md:space-y-10 flex flex-col">
        <div className="text-center space-y-4 mt-5 md:mt-10 px-8">
          <h2 className="scroll-m-20 border-b border-stone-400 darkborder-stone-600 pb-2 text-lg md:text-3xl font-semibold tracking-tight first:mt-0">
            Regístrate para ser parte del evento
          </h2>
          <p className="text-base md:text-xl text-muted-foreground">
            Es importante que completes el formulario para poder confirmar tu
            asistencia al evento.
          </p>
        </div>

        <div className="bg-zinc-100 dark:bg-neutral-950 rounded-md mx-5 md:mx-0 py-4 px-1 md:px-4">
          <form
            action="https://script.google.com/macros/s/AKfycbzSZi1iih4x_m13DfqTHZyvnhF6dchmfFDsgzjEHyNvq-RIIUeO3ZYXQ4kuionAJiy8mQ/exec"
            method="post"
            id="myForm"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col md:flex-row justify-center items-center space-x-3">
              <div className="w-[50%] md:w-[100%]">
                <BallonSvg />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5 p-4 ">
                <h3 className="text-center text-xl font-semibold mb-3">
                  Formulario de registro
                </h3>

                <div className="mb-2 md:mb-5">
                  <label
                    htmlFor="Nombres"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    name="Nombres"
                    id="Nombres"
                    minLength={4}
                    required
                    placeholder="Nombre completo"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  />
                </div>
                <div className="mb-2 md:mb-5">
                  <label
                    htmlFor="Correo"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Correo
                  </label>
                  <input
                    type="email"
                    id="Correo"
                    minLength={4}
                    required
                    name="Correo"
                    placeholder="Correo"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  />
                </div>
                <div className="mb-2 md:mb-5">
                  <label
                    htmlFor="Celular"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Número de celular
                  </label>
                  <input
                    type="number"
                    minLength={7}
                    name="Celular"
                    required
                    id="Celular"
                    placeholder="Celular"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  />
                </div>
                <div className="mb-2 md:mb-5">
                  <label
                    htmlFor="Mensaje"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    ¿Quieres compartir unas palabras especiales? Déjanos tu
                    mensaje para la ocasión.{" "}
                    <span className="text-muted-foreground text-xs">
                      (opcional)
                    </span>
                  </label>
                  <textarea
                    rows={3}
                    id="Mensaje"
                    name="Mensaje"
                    placeholder="Comparte tu mensaje"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  />
                </div>
                <div className="mb-2 md:mb-5">
                  <label
                    htmlFor="Musica"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    ¿Tienes una canción que te gustaría escuchar en el evento?
                    Comparte el nombre, el artista o un enlace.{" "}
                    <span className="text-muted-foreground text-xs">
                      (opcional)
                    </span>
                  </label>
                  <textarea
                    rows={3}
                    id="Musica"
                    name="Musica"
                    placeholder="Sugiere una canción"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  />
                </div>

                <Button
                  type="submit"
                  value={"submit"}
                  disabled={loading}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  {loading ? "Registrando ..." : "Registrarse"}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  };

  return (
    <div
      style={{
        background:
          theme == "dark"
            ? "radial-gradient(circle at bottom left, #082f49, #292524, #0a0a0a)"
            : "radial-gradient(circle at bottom left, #e7e5e4, #bae6fd, #d4d4d4)",
      }}
      className="flex flex-col items-center pb-10"
    >
      <ConfettiE /> 
      <Toaster position="top-center" reverseOrder={false} />
      {!flag ? (
        <FormEvento />
      ) : (
        <div className="flex flex-col items-center w-full h-[70vh] pt-[2rem] md:pt-[4rem] space-y-2 md:space-y-3">
          <h2 className="text-xl md:text-4xl font-semibold text-center">
            ¡Gracias por registrarte! 🥳
          </h2>
          <p className="text-base md:text-xl text-center text-muted-foreground">
            Descarga tu invitación y ¡nos vemos en el evento!
          </p>
          <div className="h-0 md:h-10" />
          <Ticket nombre={nombre} />
          <div className="h-0 md:h-5" />
          <Button
            className="bg-transparent hover:bg-background text-stone-600 dark:text-stone-200 border border-stone-600 dark:border-stone-400"
            onClick={() => navigate("/")}
          >
            <House className="mr-2 h-4 w-4" />
            Volver al inicio
          </Button>
        </div>
      )}
    </div>
  );
};

export default Evento;
