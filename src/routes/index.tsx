import Inicio from "@/pages/Inicio";
import { useRoutes } from "react-router-dom";

const ThemeRoutes = () => {
  return useRoutes([
    {
      path: "/",
      element: <Inicio />,
    },
    {
      path: "*",
      element: <h1>Not Found</h1>,
    },
  ]);
};

export default ThemeRoutes;
