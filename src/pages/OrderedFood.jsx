import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProvider";

const OrderedFood = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <Helmet>
        <title>Restora | {user.displayName} | Ordered Foods</title>
      </Helmet>
      <h1>Ordered Foods</h1>
    </div>
  );
};

export default OrderedFood;
