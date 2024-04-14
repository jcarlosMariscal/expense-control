import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./assets/css/style.css";
import { Flowbite } from "flowbite-react";
import { AppRouter } from "./routes/AppRouter";
import { AuthProvider } from "./context/AuthProvider";
import { FirestoreProvider } from "./context/FirestoreProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Flowbite>
      <AuthProvider>
        <FirestoreProvider>
        <AppRouter />
      </FirestoreProvider>
      </AuthProvider>
    </Flowbite>
  </React.StrictMode>
);
