import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Proactively disable any previously registered service workers in dev/preview
if (typeof navigator !== "undefined" && "serviceWorker" in navigator && import.meta.env.DEV) {
  navigator.serviceWorker.getRegistrations()
    .then((regs) => regs.forEach((reg) => reg.unregister()))
    .catch(() => {});
}

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(<App />);
}
