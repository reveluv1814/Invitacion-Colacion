import GraduationSvg from "@/components/ui/graduationSvg";
import ParticlesComponent from "@/components/ui/particles";

const SectionPrincipal = () => {
  return (
    <>
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: -2,
        }}
      >
        <ParticlesComponent />
      </div>

      <div className="flex flex-col md:flex-row items-center h-[85vh]">
        <div className="w-full md:w-1/2 flex flex-col md:pl-14 md:items-start px-5 pt-16 md:pt-0 md:px-0 text-stone-800 dark:text-zinc-100">
          <h1 className="scroll-m-20 text-3xl md:text-4xl font-extrabold tracking-tight lg:text-5xl text-wrap md:border-l-8 pl-2 md:pl-2 border-sky-900 text-center md:text-start">
            ¡Finalmente, la meta ha sido alcanzada! 🎓
          </h1>
          <h2 className="mt-6 md:mt-8 scroll-m-20 text-lg md:text-2xl font-light tracking-tight text-center md:text-start">
            Ven y comparte la alegría de un logro que marca el fin de una
            emocionante etapa.
          </h2>
        </div>

        <div className="w-full md:w-1/2 mt-[-6rem] md:mt-[-2rem] flex justify-center items-center">
          <GraduationSvg />
        </div>
      </div>
    </>
  );
};

export default SectionPrincipal;
