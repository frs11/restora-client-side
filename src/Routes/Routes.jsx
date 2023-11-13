import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import Registration from "../pages/Registration";
import Login from "../pages/Login";
import ErrorPage from "../pages/ErrorPage";
import Homepage from "../pages/Homepage";
import AllFoods from "../pages/AllFoods";
import Blogs from "../pages/Blogs";

const customRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Homepage></Homepage>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/allFoodItems",
        element: <AllFoods></AllFoods>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
    ],
  },
]);

export default customRoutes;
