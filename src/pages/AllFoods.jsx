import { Helmet } from "react-helmet-async";
import useAxios from "../Hooks/useAxios";
import { useEffect, useState } from "react";
import FoodCard from "../Components/Foods/FoodCard";

const AllFoods = () => {
  const axiosSecure = useAxios();
  const [foods, setFoods] = useState([]);

  // console.log(foods);

  useEffect(() => {
    axiosSecure
      .get("/foods")
      .then((res) => {
        // console.log(res.data);
        setFoods(res.data);
      })
      .catch((err) => console.log(err));
  }, [foods, axiosSecure]);

  return (
    <div>
      <Helmet>
        <title>Restora | Food List | View Available Foods</title>
      </Helmet>
      {foods.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-3/4 mx-auto my-16">
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

export default AllFoods;
