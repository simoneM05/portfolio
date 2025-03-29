import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Add smooth scrolling to the document
document.documentElement.style.scrollBehavior = "smooth";

// Imposta il tema dal localStorage o default a dark
const savedTheme = localStorage.getItem('theme');
const theme = savedTheme === 'light' ? 'light' : 'dark';

// Applica il tema all'elemento radice
document.documentElement.classList.add(theme);
if (theme === 'dark') {
  document.documentElement.classList.remove('light');
} else {
  document.documentElement.classList.remove('dark');
}

createRoot(document.getElementById("root")!).render(
  <App />
);
