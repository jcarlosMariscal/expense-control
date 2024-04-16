import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./assets/css/style.css";
import { Flowbite } from "flowbite-react";
import { AppRouter } from "./routes/AppRouter";
import { AuthProvider } from "./context/AuthProvider";
import { AppProvider } from "./context/AppProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Flowbite>
      <AuthProvider>
        <AppProvider>
        <AppRouter />
        </AppProvider>
      </AuthProvider>
    </Flowbite>
  </React.StrictMode>
);
