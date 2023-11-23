import React from "react";
import "./index.css";
import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import customRoutes from "./Routes/Routes";
import AuthProvider from "./Contexts/AuthProvider";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={customRoutes} />
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>
);
