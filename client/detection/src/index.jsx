import React from "react";
import { createRoot } from "react-dom/client";
import Detection from "./Detection";
import "./style/index.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Detection/>
  </React.StrictMode>
);
