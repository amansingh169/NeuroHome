import React from "react";
import { createRoot } from "react-dom/client";
import "./SASS/main.scss";
import App from "./App.jsx";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";
import './tailwind.css';

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
