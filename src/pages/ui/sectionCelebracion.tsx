import { Button } from "@/components/ui/button";
import { CardEvento } from "@/components/ui/cardEvento";
import CardMap from "@/components/ui/cardMap";
import { Separator } from "@/components/ui/separator";
import { ImageUpIcon, PartyPopperIcon } from "lucide-react";

const SectionCelebracion = () => {
  const driveLink =
    "https://drive.google.com/drive/folders/1mg0R2daoONx-JWx4UzBXyVUsWcrpu47O?usp=sharing";

  const handleButtonClick = () => {
    window.open(driveLink, "_blank", "noopener,noreferrer");
  };
  return (
    <div className={`py-4 md:py-10`}>
      <div className="flex flex-col justify-center items-center py-4 md:py-6 px-4">
        <PartyPopperIcon className="size-8 md:size-12 lg:size-14 dark:text-white text-sky-900" />
        <h2 className="mt-4 md:mt-8 scroll-m-20 text-xl md:text-3xl lg:text-4xl font-semibold tracking-tight transition-colors first:mt-0 px-4 text-center">
          Detalles del Evento de Celebración
        </h2>
        <h3 className="leading-7 [&:not(:first-child)]:mt-6 text-sm md:text-lg lg:text-xl text-center px-4">
          Te invitamos a celebrar con nosotros un acto muy especial en honor a
          quienes han alcanzado importantes logros. <br /> Únete a esta jornada
          de alegría y celebración.
        </h3>
      </div>
      <div className="flex flex-col lg:flex-row gap-8 justify-center py-4 items-center lg:items-start">
        <CardEvento title="Celebración" description="Datalles del evento" />
        <CardMap
          title="Ubicación"
          lugar="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3825.528489505847!2d-68.10314!3d-16.499396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTbCsDI5JzU3LjgiUyA2OMKwMDYnMTEuMyJX!5e0!3m2!1ses-419!2sbo!4v1725296013978!5m2!1ses-419!2sbo"
        />
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

export default SectionCelebracion;
