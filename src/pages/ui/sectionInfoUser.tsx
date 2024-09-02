import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TicketIcon } from "lucide-react";

const SectionInfoUser = () => {
  return (
    <div className="flex flex-col justify-center items-center py-4 md:py-6 px-4">
      <TicketIcon className="size-8 md:size-12 lg:size-14 dark:text-white text-sky-900 mt-5 md:mt-14" />
      <h2 className="mt-4 md:mt-8 scroll-m-20 text-xl md:text-3xl lg:text-4xl font-semibold tracking-tight transition-colors first:mt-0">
        Invitación
      </h2>
      <h3 className="leading-7 [&:not(:first-child)]:mt-6 text-sm md:text-lg lg:text-xl text-center px-10">
        Con gran alegría y orgullo, te invitamos a celebrar la colación de:
      </h3>
      <div className="mt-10 md:mt-16 flex justify-center items-center w-[90%] md:w-[30rem]">
        <div className="flex flex-col justify-center items-center gap-4 border border-stone-600 rounded-md w-[95%] md:w-full h-[25rem] hover:backdrop-blur-sm">
          <Avatar className="">
            <AvatarImage src="/invitacion-colacion/images/avatar.png" />
            <AvatarFallback>NG</AvatarFallback>
          </Avatar>

          <h2 className="underline text-2xl px-4 md:px-0 text-center  md:text-3xl font-extralight decoration-1">
            Neil Angel Graneros Flores
          </h2>
          <div className="justify-center items-center text-center space-y-4">
            <h3 className="text-lg md:text-2xl font-semibold">
              Licenciado en Informática
            </h3>
            <h3 className="text-base md:text-lg font-light md:font-semibold">
              Mención: Ingeniería de Sistemas Informáticos
            </h3>
            <h3 className="text-lg md:text-2xl font-semibold bg-gradient-to-r from-blue-800 to-rose-500 bg-clip-text text-transparent">
              UMSA
            </h3>
          </div>
        </div>
      </div>
      {/* second part */}
      <h3 className="leading-7 [&:not(:first-child)]:mt-10 text-sm md:text-lg lg:text-xl text-center px-10">
        Y el diplomado de:
      </h3>
      <div className="mt-10 flex justify-center items-center w-[90%] md:w-[30rem]">
        <div className="flex flex-col justify-center items-center gap-4 border border-stone-600 rounded-md w-[95%] md:w-full h-[25rem] hover:backdrop-blur-sm">
          <Avatar className="">
            <AvatarImage src="/invitacion-colacion/images/avatar2.png" />
            <AvatarFallback>VG</AvatarFallback>
          </Avatar>
          <h2 className="underline text-2xl px-4 md:px-0 text-center  md:text-3xl font-extralight decoration-1">
            Lic. Vania Anett Graneros Flores
          </h2>
          <div className="justify-center items-center text-center space-y-4">
            <h3 className="text-lg md:text-2xl font-semibold">Diplomado en</h3>
            <h3 className="text-base md:text-lg font-light md:font-semibold">
              Educación Superior Basado en Competencias
            </h3>
            <h3 className="text-lg md:text-2xl font-semibold bg-gradient-to-r from-blue-800 to-rose-500 bg-clip-text text-transparent">
              UMSA
            </h3>
          </div>
        </div>
      </div>
      <div className="mt-14 bg-zinc-100 dark:bg-stone-900 hover:bg-sky-50 hover:dark:bg-stone-950  p-6 rounded-lg shadow-md flex justify-center items-center text-center flex-col mx-6 md:mx-0">
        <h4 className="text-base md:text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 text-center">
          Quienes, con gran dedicación, han culminado sus estudios
          universitarios y obtenido su diploma, respectivamente.
        </h4>
        <p className="text-xs md:text-base text-gray-700 dark:text-gray-300 text-center">
          Agradecemos de corazón tu presencia para compartir este logro y
          celebrar este momento tan especial.
        </p>
        <p className="mt-4 md:mt-6 text-xs md:text-base text-gray-700 dark:text-gray-300 text-center">
          A continuación, encontrarás todos los detalles del evento, como el
          lugar y la fecha. ¡Espero verte allí para celebrar juntos!
        </p>
      </div>
    </div>
  );
};

export default SectionInfoUser;
