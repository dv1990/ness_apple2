import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Proactively disable any previously registered service workers in all environments (preview and published)
if (typeof navigator !== "undefined" && "serviceWorker" in navigator) {
  (async () => {
    try {
      const regs = await navigator.serviceWorker.getRegistrations();
      const hadSW = regs.length > 0 || !!navigator.serviceWorker.controller;
      await Promise.all(regs.map((reg) => reg.unregister()));

      if ("caches" in window) {
        const keys = await caches.keys();
        await Promise.all(keys.map((k) => caches.delete(k)));
      }

      if (hadSW && !sessionStorage.getItem("sw_cleanup_reloaded")) {
        sessionStorage.setItem("sw_cleanup_reloaded", "1");
        console.info("[SW] Cleaned up and reloading to apply fresh assets");
        window.location.reload();
      } else {
        console.info("[SW] No SW to clean or already reloaded");
      }
    } catch (err) {
      console.warn("[SW] Cleanup failed", err);
    }
  })();
}

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(<App />);
}
