import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Flowbite } from "flowbite-react";
import { HomePage } from "./pages/HomePage";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Flowbite>
      <HomePage />
    </Flowbite>
  </React.StrictMode>
);
