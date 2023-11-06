import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import Registration from "../pages/Registration";
import Login from "../pages/Login";

const customRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default customRoutes;
