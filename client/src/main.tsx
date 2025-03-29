import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Add smooth scrolling to the document
document.documentElement.style.scrollBehavior = "smooth";

createRoot(document.getElementById("root")!).render(<App />);
