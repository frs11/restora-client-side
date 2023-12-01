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
import DataLoadingState from "./DataLoadingState";
import SingleFoodDetails from "../pages/SingleFoodDetails";
import FoodUpdate from "../pages/FoodUpdate";
import OrderFood from "../pages/OrderFood";

const customRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Homepage></Homepage>,
        loader: () => fetch("http://localhost:5000/foods"),
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
        element: (
          <PrivateRoutes>
            <UserAddedFoods></UserAddedFoods>
          </PrivateRoutes>
        ),
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
        loader: () => fetch("http://localhost:5000/foods"),
        element: (
          <DataLoadingState>
            <AllFoods></AllFoods>
          </DataLoadingState>
        ),
      },
      {
        path: `/foods/:foodId`,
        element: (
          <DataLoadingState>
            <SingleFoodDetails></SingleFoodDetails>
          </DataLoadingState>
        ),
      },
      {
        path: `/foods/update/:id`,
        element: (
          <PrivateRoutes>
            <FoodUpdate></FoodUpdate>
          </PrivateRoutes>
        ),
      },
      {
        path: `/orderFood/:id`,
        element: (
          <PrivateRoutes>
            <OrderFood></OrderFood>
          </PrivateRoutes>
        ),
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
