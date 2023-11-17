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
import RestrictedRoutes from "./RestrictedRoutes";

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
        element: (
          <RestrictedRoutes>
            <Registration></Registration>
          </RestrictedRoutes>
        ),
      },
      {
        path: "/login",
        element: (
          <RestrictedRoutes>
            <Login></Login>
          </RestrictedRoutes>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoutes>
            <Profile></Profile>
          </PrivateRoutes>
        ),
      },
      {
        path: "/addedFoodList",
        element: <UserAddedFoods></UserAddedFoods>,
      },
      {
        path: "/addFood",
        element: (
          <PrivateRoutes>
            <AddFood></AddFood>
          </PrivateRoutes>
        ),
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
