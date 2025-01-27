import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./components/App/App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <h1>Hello</h1>
    <App />
  </StrictMode>
);
