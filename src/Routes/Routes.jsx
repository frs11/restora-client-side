import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import Registration from "../pages/Registration";
import Login from "../pages/Login";
import ErrorPage from "../pages/ErrorPage";
import Homepage from "../pages/Homepage";
import AllFoods from "../pages/AllFoods";
import Blogs from "../pages/Blogs";
import Profile from "../pages/Profile";
import UserAddedFoods from "../pages/UserAddedFoods";
import AddFood from "../pages/AddFood";
import OrderedFood from "../pages/OrderedFood";
import PrivateRoutes from "./PrivateRoutes";

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
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/addedFoodList",
        element: <UserAddedFoods></UserAddedFoods>,
      },
      {
        path: "/addFood",
        element: <AddFood></AddFood>,
      },
      {
        path: "/allFoodItems",
        element: <AllFoods></AllFoods>,
      },
      {
        path: "/orderedFood",
        element: (
          <PrivateRoutes>
            <OrderedFood></OrderedFood>
          </PrivateRoutes>
        ),
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
    ],
  },
]);

export default customRoutes;
