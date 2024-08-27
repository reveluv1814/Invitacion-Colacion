import Logo from "./logo";
import { ModeToggle } from "./modeToggle";

const MainNav = () => {
  return (
    <div className="items-center justify-between mr-4 md:flex w-full hidden">
      <div className="flex flex-row items-center gap-2">
        <Logo />
        <div className="flex flex-col border-l-[0.2rem] border-sky-900 pl-3 justify-center items-start">
          <h2 className="text-xl font-medium tracking-tight transition-colors first:mt-0  text-center">
            Colación de Grado
          </h2>
          <p className="text-muted-foreground">Lic. Neil Graneros Flores</p>
        </div>
      </div>

      {/* {mainNavItems.map((item, index) => (
        <Button key={index} variant="default">
          {item}
        </Button>
      ))} */}
      <ModeToggle />
    </div>
  );
};

export default MainNav;
