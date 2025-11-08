import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { performanceBudgetMonitor } from "./lib/performance-budget";

const rootElement = document.getElementById("root");
if (rootElement) {
  try {
    console.log('✅ Initializing React mount...');
    createRoot(rootElement).render(<App />);
    console.log('✅ React mount successful');
  } catch (error) {
    console.error('🔴 Failed to mount React app:', error);
    rootElement.innerHTML = `
      <div style="display:flex;align-items:center;justify-content:center;min-height:100vh;background:#0f172a;color:white;font-family:sans-serif;padding:20px;text-align:center;">
        <div>
          <h1 style="font-size:24px;margin-bottom:12px;">⚠️ App Failed to Load</h1>
          <p style="color:#94a3b8;margin-bottom:20px;">Error: ${error instanceof Error ? error.message : String(error)}</p>
          <button onclick="window.location.reload()" style="background:#22c55e;color:white;border:none;padding:12px 24px;border-radius:8px;cursor:pointer;font-size:16px;">
            Reload Page
          </button>
        </div>
      </div>
    `;
  }
} else {
  console.error('🔴 Root element not found');
}
