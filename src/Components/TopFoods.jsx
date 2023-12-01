import { useEffect, useState } from "react";
import { axiosSecure } from "../Hooks/useAxios";
import TopFood from "./Foods/TopFood";
import { Link } from "react-router-dom";

const TopFoods = () => {
  const [topFoods, setTopFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axiosSecure
      .get("/topFoods")
      .then((res) => {
        setTopFoods(res?.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="w-10/12 mx-auto my-12 py-6 px-5 bg-gray-100 dark:bg-slate-900">
      <h1 className="text-2xl mb-10 flex items-center justify-center md:text-3xl text-center font-semibold">
        Our Top Selling Foods{" "}
        <img
          width="48"
          height="48"
          className="ml-3"
          src="https://img.icons8.com/fluency/48/hot-dog.png"
          alt="hot-dog"
        />
      </h1>
      {loading ? (
        <div className="w-full h-[20vh] flex justify-center items-center">
          <span className="loading loading-spinner loading-lg text-violet-400 mx-auto "></span>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {topFoods.map((topFood, idx) => (
            <TopFood key={idx} topFood={topFood}></TopFood>
          ))}
        </div>
      )}
      <Link className="flex justify-center mt-5" to="/allFoodItems">
        <button className="mt-4 px-4 py-2 rounded border-2 border-violet-400 hover:border-violet-600 hover:bg-violet-700 duration-150 ease-in-out font-semibold text-black hover:text-white dark:text-white">
          View All Foods
        </button>
      </Link>
    </div>
  );
};

export default TopFoods;
