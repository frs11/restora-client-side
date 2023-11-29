import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../Contexts/AuthProvider";
import FoodCard from "../Components/Foods/FoodCard";
import { useEffect, useState } from "react";
import { axiosSecure } from "../Hooks/useAxios";

const UserAddedFoods = () => {
  const { user } = useContext(AuthContext);

  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosSecure
      .get(`/userAddedFoods?user=${user?.email}`)
      .then((res) => {
        setFoods(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [user?.email]);

  return (
    <div>
      <Helmet>
        <title>
          Restora | {user.displayName} Food List | View all Available Foods
          added by {user.displayName}
        </title>
      </Helmet>
      {!loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-3/4 md:w-10/12 lg:w-10/12 mx-auto my-16">
          {foods.length > 0 ? (
            foods.map((foodData) => (
              <FoodCard key={foodData._id} foodData={foodData}></FoodCard>
            ))
          ) : (
            <p className="text-4xl text-center md:col-span-2 lg:col-span-3">
              No Product available
            </p>
          )}
        </div>
      ) : (
        <div className="w-full h-[20vh] flex justify-center items-center">
          <span className="loading loading-spinner loading-lg text-violet-400 mx-auto "></span>
        </div>
      )}
    </div>
  );
};

export default UserAddedFoods;
