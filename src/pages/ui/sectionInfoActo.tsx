import { Button } from "@/components/ui/button";
import { CardDemo } from "@/components/ui/cardCustom";
import CardMap from "@/components/ui/cardMap";
import { Separator } from "@/components/ui/separator";
import { GraduationCap, ImageUpIcon } from "lucide-react";

const SectionInfoActo = () => {
  const driveLink =
    "https://drive.google.com/drive/folders/1mg0R2daoONx-JWx4UzBXyVUsWcrpu47O?usp=sharing";

  const handleButtonClick = () => {
    window.open(driveLink, "_blank", "noopener,noreferrer");
  };
  return (
    <div className={`py-4 md:py-10`}>
      <div className="flex flex-col justify-center items-center py-4 md:py-6 px-4">
        <GraduationCap className="size-8 md:size-12 lg:size-14 dark:text-white text-sky-900" />
        <h2 className="mt-4 md:mt-8 scroll-m-20 text-xl md:text-3xl lg:text-4xl font-semibold tracking-tight transition-colors first:mt-0 px-4 text-center">
          Detalles del Evento de Colación de Grado
        </h2>
        <h3 className="leading-7 [&:not(:first-child)]:mt-6 text-sm md:text-lg lg:text-xl text-center px-4">
          ¡Únete a la celebración y acompáñame para capturar este momento
          especial con una foto! 📸
        </h3>
      </div>
      <div className="flex flex-col lg:flex-row gap-8 justify-center py-4 items-center lg:items-start">
        <CardDemo title="Acto de Colación" description="Datalles del evento" />
        <CardMap title="Ubicación" description="" />
      </div>
      <div className="flex flex-col justify-center items-center mt-10">
        <div className="flex flex-col w-[80%] md:w-[50%]  items-center gap-6">
          <Separator />
          <div className="flex justify-center gap-10 items-center flex-col">
            <h3 className="text-base md:text-xl font-semibold text-center">
              ¿Tienes fotos del evento?
              <br /> ¡Súbelas aquí para compartir esos momentos especiales!
            </h3>

            <Button
              className="bg-transparent  hover:bg-blue-300 hover:dark:bg-sky-900 border border-stone-600 dark:border-zinc-400 dark:text-zinc-100 text-stone-800"
              onClick={handleButtonClick}
            >
              <ImageUpIcon className="mr-2 h-4 w-4" /> Subir imágenes
            </Button>
          </div>
          <Separator />
        </div>
      </div>
    </div>
  );
};

export default SectionInfoActo;
