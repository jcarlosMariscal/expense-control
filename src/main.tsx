import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { SidebarComponent } from "./components/SidebarComponent";
import { Flowbite } from "flowbite-react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Flowbite>
      <div className="grid grid-cols-12">
        <div className="col-span-2 w-full">
          <SidebarComponent />
        </div>
        <div className="col-span-10 h-screen bg-slate-100 dark:bg-slate-900">
          sds
        </div>
      </div>
    </Flowbite>
  </React.StrictMode>
);
