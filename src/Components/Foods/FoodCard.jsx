import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import "aos/dist/aos.css";
import AOS from "aos";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";

const FoodCard = ({ foodData }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const {
    _id,
    foodName,
    foodImage,
    foodCategory,
    quantity,
    price,
    addedBy,
    // foodOrigin,
  } = foodData || {};

  useEffect(() => {
    AOS.init({
      duration: 700,
      once: false,
      offset: 150,
    });
    AOS.init({
      startEvent: "onReveal",
    });
    AOS.refresh();

    return AOS.refreshHard();
  }, []);

  return (
    <div data-aos="zoom-in-down">
      <div className="shadow-md dark:border rounded-md dark:border-slate-700">
        <div className="flex justify-center px-5 py-3">
          <img
            src={foodImage}
            alt="Food Image"
            className="h-[200px] rounded-t-lg"
          />
        </div>

        <div className="overflow-x-auto border-x border-b border-gray-200 dark:border-gray-700 rounded-b-lg">
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
              {user?.email == addedBy?.email &&
              location?.pathname === "/addedFoodList" ? (
                <tr>
                  <td className="font-bold">User: </td>
                  <td>:</td>
                  <td>{addedBy.name}</td>
                </tr>
              ) : (
                ""
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-4">
        <div className="">
          <Link to={`/foods/${_id}`}>
            <button className="w-full btn bg-violet-900 text-white hover:bg-violet-700 border-violet-900 ease-in-out hover:border-violet-800 duration-300">
              Details
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
