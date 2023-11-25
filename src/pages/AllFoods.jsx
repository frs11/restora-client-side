import { Helmet } from "react-helmet-async";
import FoodCard from "../Components/Foods/FoodCard";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const AllFoods = () => {
  const [foods, setFoods] = useState([]);
  const [foodPerPage, setFoodPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const totalFoods = useLoaderData().length;
  const pagesCount = Math.ceil(totalFoods / foodPerPage);
  const pages = [...Array(pagesCount).keys()];

  useEffect(() => {
    axios
      .get(
        `http://localhost:5000/foods?page=${currentPage}&size=${foodPerPage}`
      )
      .then((res) => {
        setFoods(res.data);
      })
      .catch((err) => console.log(err));
  }, [currentPage, foodPerPage]);

  const handleFoodsPerPage = (e) => {
    const intValue = parseInt(e.target.value);
    // console.log(intValue);
    setFoodPerPage(intValue);
    setCurrentPage(0);
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

  return (
    <div>
      <Helmet>
        <title>Restora | Food List | View Available Foods</title>
      </Helmet>
      {foods.length > 0 ? (
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
      <div className="flex justify-center mb-10 space-x-5">
        <button
          className="px-4 text-white py-px bg-gray-600 rounded"
          onClick={handlePrevButton}
        >
          Prev
        </button>
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
        <button
          className="px-4 text-white py-px bg-gray-600 rounded"
          onClick={handleNextButton}
        >
          Next
        </button>
        {/* <p>currentPage: {currentPage + 1}</p> <br /> */}
        <select
          className="border bg-gray-700 text-white px-1 py-1 rounded"
          onChange={handleFoodsPerPage}
          defaultValue={foodPerPage}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>
    </div>
  );
};

export default AllFoods;
