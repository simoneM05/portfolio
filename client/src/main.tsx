import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Add smooth scrolling to the document
document.documentElement.style.scrollBehavior = "smooth";

// Tema iniziale gestito dal ThemeContext
// Lasciamo vuoto perché adesso la gestione avviene nel ThemeProvider

createRoot(document.getElementById("root")!).render(
  <App />
);
