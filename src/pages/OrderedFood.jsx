import { Helmet } from "react-helmet-async";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import { axiosSecure } from "../Hooks/useAxios";
import OrderedFoodData from "../Components/Foods/OrderedFoodData";

const OrderedFood = () => {
  const { user } = useContext(AuthContext);
  const [orderedFood, setOrderedFood] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosSecure
      .get(`/orderedFood?user=${user.email}`)
      .then((res) => {
        setOrderedFood(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [user.email, orderedFood]);

  return (
    <div>
      <Helmet>
        <title>Restora | {user.displayName} | Ordered Foods</title>
      </Helmet>
      <h1 className="text-center flex justify-center items-center text-2xl md:text-4xl font-semibold my-14">
        Purchase List
        <img
          width="48"
          height="48"
          className="ml-2"
          src="https://img.icons8.com/color/48/paid.png"
          alt="paid"
        />
      </h1>
      {!loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-3/4 md:w-11/12 lg:w-10/12 mx-auto my-16">
          {orderedFood.length > 0 ? (
            orderedFood.map((foodData, idx) => (
              <OrderedFoodData key={idx} foodData={foodData}></OrderedFoodData>
            ))
          ) : (
            <p className="text-4xl text-center md:col-span-2 lg:col-span-3">
              No Purchase available
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

export default OrderedFood;
