import React from "react";
import { createRoot } from "react-dom/client";
import "./SASS/main.scss";
import App from "./App.jsx";
import "./tailwind.css";

createRoot(document.getElementById("root")).render(<App />);
