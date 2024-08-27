import CertificationSvg from "@/components/ui/certificationSvg";
import { Skeleton } from "@/components/ui/skeleton";
import { PartyPopperIcon } from "lucide-react";

const SectionFooter = () => {
  return (
    <div className={`pt-4 md:pt-12 dark:bg-stone-900 bg-stone-300`}>
      <div className="flex flex-col justify-center items-center py-4 md:py-6 text-stone-800 dark:text-zinc-100">
        <PartyPopperIcon className="size-8 md:size-12 lg:size-14 dark:text-white text-sky-900" />
        <h2 className="mt-4 md:mt-8 scroll-m-20 text-xl md:text-3xl lg:text-4xl font-semibold tracking-tight transition-colors first:mt-0 text-center px-8 md:px-8">
          Evento de Celebración por la Colación de Grado
        </h2>
        <div className="mt-2 flex flex-col md:flex-row">
          <div className="w-full md:w-[30rem] flex justify-center items-center">
            <CertificationSvg />
          </div>
          <div className="flex items-center space-x-4">
            <div className="space-y-2 flex flex-col justify-center items-center">
              <div className="w-[23rem] mb-4">
                <h3 className="leading-7 [&:not(:first-child)]:mt-6 text-sm md:text-lg text-center px-4 md:px-0">
                  Muy pronto se publicarán más detalles sobre la fiesta de
                  celebración por la colación de grado. ¡Mantente atento a esta
                  página!
                </h3>
              </div>
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 md:mt-10 flex justify-center font-semibold pb-4">
        <h4>
          <span className="font-light">Sitio hecho por </span>
          <a
            href="https://www.linkedin.com/in/neil-graneros/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-[#55679C]"
          >
            Neil Graneros 🎓 - 2024
          </a>
        </h4>
      </div>
    </div>
  );
};

export default SectionFooter;
