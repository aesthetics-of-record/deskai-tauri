import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.css";
import WindowTitlebar from "./components/titlebar/window-titlebar";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <WindowTitlebar />
    <App />
  </React.StrictMode>
);
