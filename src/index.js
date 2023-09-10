import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./index.css";
import CrudProvider from "./context/CrudContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CrudProvider>
      <App />
    </CrudProvider>
  </React.StrictMode>
);
