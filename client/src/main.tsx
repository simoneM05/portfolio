import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Add smooth scrolling to the document
document.documentElement.style.scrollBehavior = "smooth";

// Imposta il tema dal localStorage o default a dark
const savedTheme = localStorage.getItem('theme');
const theme = savedTheme === 'light' ? 'light' : 'dark';

console.log("Tema iniziale:", theme);

// Applica il tema all'elemento radice
if (theme === 'light') {
  document.documentElement.classList.add('light');
  document.documentElement.classList.remove('dark');
} else {
  document.documentElement.classList.add('dark');
  document.documentElement.classList.remove('light');
}

createRoot(document.getElementById("root")!).render(
  <App />
);
