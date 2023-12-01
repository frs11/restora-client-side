import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const TopFood = ({ topFood }) => {
  const { _id, foodName, foodImage, foodCategory, price } = topFood || {};
  return (
    <div>
      <div className="dark:bg-slate-800 bg-slate-200 rounded-md px-3 py-2 mb-4">
        <div className="flex justify-center">
          <img src={foodImage} className="h-[200px]" alt="Top food image" />
        </div>
        <div className="ml-4">
          <h1 className="mt-2 text-slate-900 dark:text-slate-100  h-12">
            <span className="font-semibold">Name: </span> {foodName}
          </h1>
          <h1 className="mt-2 text-slate-900 dark:text-slate-100 ">
            <span className="font-semibold">Category: </span> {foodCategory}
          </h1>
          <h1 className="mt-2 text-slate-900 dark:text-slate-100 ">
            {" "}
            <span className="font-semibold">Price: </span> {price}
          </h1>
        </div>
      </div>
      <Link to={`/foods/${_id}`}>
        <button className="w-full btn bg-violet-900 text-white hover:bg-violet-700 border-violet-900 ease-in-out hover:border-violet-800 duration-300">
          Details
        </button>
      </Link>
    </div>
  );
};

TopFood.propTypes = {
  topFood: PropTypes.object.isRequired,
};
export default TopFood;
