import React from "react";
import "./index.css";
import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import customRoutes from "./Routes/Routes";
import AuthProvider from "./Contexts/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={customRoutes} />
    </AuthProvider>
  </React.StrictMode>
);
