import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Flowbite } from "flowbite-react";
import { AppRouter } from "./routes/AppRouter";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Flowbite>
      <AppRouter />
    </Flowbite>
  </React.StrictMode>
);
