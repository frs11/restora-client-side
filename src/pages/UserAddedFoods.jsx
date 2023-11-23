import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../Contexts/AuthProvider";

const UserAddedFoods = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <Helmet>
        <title>Restora | {user.displayName} | Added Foods </title>
      </Helmet>
      <h1>User Added Foods</h1>
    </div>
  );
};

export default UserAddedFoods;
