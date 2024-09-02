import { Button } from "./button";
import { Menu as MenuIcon } from "lucide-react";
import { SheetContent, SheetTrigger, Sheet } from "./sheet";
import { ModeToggle } from "./modeToggle";
import Logo from "./logo";

const MobileNav = () => {
  //const mobileItems: string[] = ["A", "B", "C"];
  //const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="relative w-full flex items-center justify-between md:hidden">
      <Sheet>
        {/* This button will trigger open the mobile sheet menu */}
        <SheetTrigger asChild className="">
          <Button variant="ghost" size="icon" className="md:hidden">
            <MenuIcon />
          </Button>
        </SheetTrigger>

        <SheetContent side="left">
          <div className="flex flex-col items-start">
            {/* {mobileItems.map((item, index) => (
              <Button key={index} variant="link" onClick={() => {}}>
                {item}
              </Button>
            ))} */}
            <ModeToggle />
          </div>
        </SheetContent>
      </Sheet>
      <div className="flex-1 flex justify-center">
        <div className="flex flex-row items-center gap-2">
          <Logo />
          <div className="flex flex-col justify-center items-start">
            <h2 className="text-sm font-medium tracking-tight transition-colors first:mt-0  text-center">
              Invitación
            </h2>
            <p className="text-muted-foreground text-xs">
              Evento de Graduación
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
