import { createRoot } from "react-dom/client";
import "./SASS/main.scss";
import App from "./App.jsx";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
