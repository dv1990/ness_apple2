import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Clean service worker only once per session
if (typeof navigator !== "undefined" && "serviceWorker" in navigator && !sessionStorage.getItem("sw_checked")) {
  sessionStorage.setItem("sw_checked", "1");
  navigator.serviceWorker.getRegistrations().then(regs => {
    regs.forEach(reg => reg.unregister());
  });
}

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(<App />);
}
