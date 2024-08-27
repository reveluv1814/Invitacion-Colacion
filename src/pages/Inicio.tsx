import NavBar from "@/components/ui/navBar";
import SectionPrincipal from "./ui/sectionPrincipal";
import SectionInfoActo from "./ui/sectionInfoActo";
import { useTheme } from "@/components/ThemeProvider";
import { Separator } from "@/components/ui/separator";
import SectionInfoUser from "./ui/sectionInfoUser";
import SectionFooter from "./ui/sectionFooter";

const Inicio = () => {
  const { theme } = useTheme();
  return (
    <div>
      <NavBar />
      <div className="">
        <SectionPrincipal />
      </div>

      <div
        style={{
          background:
            theme == "dark"
              ? "radial-gradient(circle at bottom left, #082f49, #292524, #0a0a0a)"
              : "radial-gradient(circle at bottom left, #e7e5e4, #bae6fd, #d4d4d4)",
        }}
      >
        <SectionInfoUser />
        <div className="flex justify-center items-center mt-14">
          <div className="w-[80%] md:w-[50%]">
            <Separator />
          </div>
        </div>
        <SectionInfoActo />
      </div>
      <SectionFooter />
    </div>
  );
};

export default Inicio;
