import "./App.css";
import { ThemeProvider } from "./components/ThemeProvider";
import ThemeRoutes from "./routes";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ThemeRoutes />
    </ThemeProvider>
  );
}

export default App;
