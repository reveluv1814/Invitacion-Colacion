import MainNav from "./mainNav";
import MobileNav from "./mobileNav";

const NavBar = () => {
  return (
    <header className="w-full border-b">
      <div className="flex h-14 md:h-20 lg:h-22 items-center px-4 ">
        <MainNav />
        <MobileNav />
      </div>
    </header>
  );
};

export default NavBar;
