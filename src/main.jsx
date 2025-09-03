import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import * as Sentry from "@sentry/react";
import "./index.css";
import App from "./App.jsx";

Sentry.init({
  dsn: "https://6680ab72a5be9a1ad7591f33ec95aff8@o4509316252303360.ingest.de.sentry.io/4509958082199632",
  sendDefaultPii: true,
});

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
