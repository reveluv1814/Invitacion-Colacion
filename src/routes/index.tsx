import NavBar from "@/components/ui/navBar";
import ScrollToTop from "@/lib/scrollToTop";
import Evento from "@/pages/Evento";
import Inicio from "@/pages/Inicio";
import { useRoutes } from "react-router-dom";

const ThemeRoutes = () => {
  return (
    <>
      <ScrollToTop />
      {useRoutes([
        {
          path: "/",
          element: <NavBar />,
          children: [
            { path: "/", element: <Inicio /> },
            { path: "/evento", element: <Evento /> },
          ],
        },
        {
          path: "*",
          element: <h1>Not Found</h1>,
        },
      ])}
    </>
  );
};

export default ThemeRoutes;
