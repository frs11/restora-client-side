import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const FoodCard = ({ foodData }) => {
  const {
    _id,
    foodName,
    foodImage,
    foodCategory,
    quantity,
    price,
    addedBy,
    foodOrigin,
  } = foodData || {};
  return (
    <div className="">
      <div className="shadow-md">
        <div className="flex justify-center">
          <img
            src={foodImage}
            alt="Food Image"
            className="h-[200px] rounded-t-lg"
          />
        </div>

        <div className="overflow-x-auto border-x border-b border-gray-200 dark:border-gray-700 mb-4 rounded-b-lg">
          <table className="table">
            <thead></thead>
            <tbody className="">
              {/* row 1 */}
              <tr className="h-28">
                <td className="font-bold">Name: </td>
                <td>:</td>
                <td className="">{foodName}</td>
              </tr>
              {/* row 2 */}
              <tr className="bg-gray-100 dark:bg-gray-700">
                <td className="font-bold">Category: </td>
                <td>:</td>
                <td>{foodCategory}</td>
              </tr>
              {/* row 3 */}
              <tr>
                <td className="font-bold">Quantity: </td>
                <td>:</td>
                <td>{quantity}</td>
              </tr>
              {/* row 4 */}
              <tr className="bg-gray-100 dark:bg-gray-700">
                <td className="font-bold">Price: </td>
                <td>:</td>
                <td>{price}$</td>
              </tr>
              {/* row 5 */}
              <tr>
                <td className="font-bold">User: </td>
                <td>:</td>
                <td>{addedBy.name}</td>
              </tr>
              {/* row 6 */}
              <tr className="bg-gray-100 dark:bg-gray-700">
                <td className="font-bold">Origin: </td>
                <td>:</td>
                <td>{foodOrigin}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="">
        <div className="grid grid-cols-2 gap-2">
          <Link to={`/foods/${_id}`}>
            <button className="w-full btn bg-violet-900 text-white hover:bg-violet-700 border-violet-900 ease-in-out hover:border-violet-800 duration-300">
              Details
            </button>
          </Link>
          <Link to={`/foods/update/${_id}`}>
            <button className="w-full btn btn-outline hover:bg-violet-700 dark:text-white hover:border-none border ease-in-out duration-300 border-violet-500">
              Update
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

FoodCard.propTypes = {
  foodData: PropTypes.object.isRequired,
};

export default FoodCard;
