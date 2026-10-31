import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import "./styles/globals.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";

if ("scrollRestoration" in history) history.scrollRestoration = "manual";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element #root is missing from the document");
}

const application = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, application);
} else {
  createRoot(rootElement).render(application);
}
