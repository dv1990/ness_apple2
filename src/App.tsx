import React from "react";
import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "@/components/ErrorBoundary";

const App = () => {
  const basename = import.meta.env.PROD ? "/ness_apple2" : undefined;
  return (
    <ErrorBoundary>
      <BrowserRouter basename={basename}>
        <main className="min-h-screen flex items-center justify-center bg-gray-50">
          <section className="text-center p-6">
            <h1 className="text-3xl font-semibold text-gray-900">NESS App is mounted ✅</h1>
            <p className="mt-2 text-gray-600">Tailwind, routing, and components compile without errors.</p>
          </section>
        </main>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;
