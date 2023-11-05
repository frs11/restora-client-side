import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";

const customRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
  },
]);

export default customRoutes;
