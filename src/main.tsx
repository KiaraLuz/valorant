import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="sm:block hidden z-0 absolute top-0 right-0 w-full h-full bg-zinc-400 clip-diagonal-right"></div>
    <App />
  </StrictMode>
);
