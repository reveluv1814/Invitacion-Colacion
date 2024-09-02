import { Outlet } from "react-router-dom";
import MainNav from "./mainNav";
import MobileNav from "./mobileNav";
import { useEffect, useState } from "react";
import Footer from "@/pages/ui/footer";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <header
        className={`w-full border-b fixed top-0 left-0 transition-all duration-300 ${
          scrolled ? "backdrop-blur-md shadow-md z-50" : "bg-transparent"
        }`}
      >
        <div className="flex h-14 md:h-20 lg:h-22 items-center px-4 ">
          <MainNav />
          <MobileNav />
        </div>
      </header>
      <div className="pt-14 md:pt-20 lg:pt-22">
        <main>
          <Outlet />
          <Footer />
        </main>
      </div>
    </>
  );
};

export default NavBar;
