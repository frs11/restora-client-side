import { Helmet } from "react-helmet-async";
import FoodCard from "../Components/Foods/FoodCard";
// import axios from "axios";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { axiosSecure } from "../Hooks/useAxios";
import { IoPlaySkipForward } from "react-icons/io5";
import { IoIosSkipBackward } from "react-icons/io";

const AllFoods = () => {
  const totalFoods = useLoaderData();
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [foodPerPage, setFoodPerPage] = useState(9);
  const [currentPage, setCurrentPage] = useState(0);
  const [pagesCount, setPagesCount] = useState(
    Math.ceil(totalFoods.length / foodPerPage)
  );
  const pages = [...Array(pagesCount).keys()];

  useEffect(() => {
    axiosSecure
      .get(`/foods?page=${currentPage}&size=${foodPerPage}`)
      .then((res) => {
        setFoods(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [currentPage, foodPerPage]);

  const handleFoodsPerPage = (e) => {
    const intValue = parseInt(e.target.value);
    setFoodPerPage(intValue);
    setCurrentPage(0);
    setPagesCount(Math.ceil(totalFoods.length / intValue));
  };
  const handlePrevButton = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNextButton = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handleSearch = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const searchFood = form.get("search").toLowerCase();
    const searchedFood = totalFoods.filter((searchedFoodItem) =>
      searchedFoodItem.foodName.toLowerCase().includes(searchFood)
    );
    setPagesCount(Math.ceil(searchedFood.length / foodPerPage));
    setFoods(searchedFood);
    e.target.reset();
  };

  return (
    <div>
      <Helmet>
        <title>Restora | Food List | View Available Foods</title>
      </Helmet>
      <div className="flex justify-center mt-10">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            name="search"
            placeholder="Search by Food Name..."
            className="dark:bg-gray-600 px-3 py-1 h-8 border-y border-l rounded-l border-black dark:border-gray-400 dark:text-white"
          />
          <button className="px-5 py-1 rounded-r bg-violet-800 text-white hover:bg-violet-700 border-violet-600 border-r border-y ease-in-out hover:border-violet-800 duration-300">
            Search
          </button>
        </form>
      </div>
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
      <div className="flex justify-center items-center w-10/12 mx-auto flex-wrap mb-10 space-x-3 space-y-2">
        <button
          className="px-4 flex items-center text-white py-px bg-gray-600 rounded"
          onClick={handlePrevButton}
        >
          <IoIosSkipBackward /> Prev
        </button>
        <span className="flex flex-wrap justify-center items-center space-x-3">
          {pages.map((page, idx) => (
            <button
              className={
                currentPage == page
                  ? "px-4 text-white py-px border bg-violet-500 dark:border-violet-400 border-violet-600 rounded"
                  : "px-4 text-white py-px bg-gray-600 border border-gray-600 rounded"
              }
              key={idx}
              onClick={() => setCurrentPage(page)}
            >
              {" "}
              {page + 1}
            </button>
          ))}
        </span>
        <button
          className="flex items-center px-4 text-white py-px bg-gray-600 rounded"
          onClick={handleNextButton}
        >
          Next <IoPlaySkipForward />
        </button>
        {/* <p>currentPage: {currentPage + 1}</p> <br /> */}
        <select
          className="border bg-gray-700 text-white px-1 py-px rounded"
          onChange={handleFoodsPerPage}
          defaultValue={foodPerPage}
        >
          <option value="6">6</option>
          <option value="9">9</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>
    </div>
  );
};

export default AllFoods;
