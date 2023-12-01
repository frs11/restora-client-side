import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { axiosSecure } from "../Hooks/useAxios";
import { MdOutlineEditNote } from "react-icons/md";
import { LuShoppingCart } from "react-icons/lu";
import { AuthContext } from "../Contexts/AuthProvider";
import swal from "sweetalert";

const SingleFoodDetails = () => {
  const { user } = useContext(AuthContext);
  const { foodId } = useParams();
  const [SelectedFood, setSelectedFood] = useState({});
  //   console.log(foodId);
  useEffect(() => {
    axiosSecure
      .get(`/foods/${foodId}`)
      .then((res) => setSelectedFood(res.data))
      .catch((err) => console.log(err));
  }, [foodId]);
  const {
    _id,
    quantity,
    price,
    foodImage,
    foodName,
    foodCategory,
    foodOrigin,
    description,
    addedBy,
  } = SelectedFood || {};
  //   console.log(addedBy);
  const { name, email } = addedBy || {};

  const handleDisabledButton = () => {
    swal("Sorry!", "We are out of Stock!!", "error");
  };
  return (
    <div className="w-10/12 lg:max-w-screen-2xl mx-auto my-10">
      <Helmet>
        <title>
          Restora | Food Details | Know Everything You Need To bow About Your
          Food
        </title>
      </Helmet>
      <div className="flex justify-center">
        <img src={foodImage} alt="" />
      </div>
      <div className="overflow-x-auto my-4 w-full lg:w-10/12 mx-auto">
        <table className="table">
          <thead></thead>
          <tbody>
            {/* row 1 */}
            <tr>
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
              <td>{name}</td>
            </tr>
            {/* row 6 */}
            <tr className="bg-gray-100 dark:bg-gray-700">
              <td className="font-bold">Origin: </td>
              <td>:</td>
              <td>{foodOrigin}</td>
            </tr>
            {/* row 7 */}
            <tr>
              <td className="font-bold">Description: </td>
              <td>:</td>
              <td>{description}</td>
            </tr>
          </tbody>
        </table>
        <div className="">
          {user?.email == email ? (
            <Link to={`/foods/update/${_id}`}>
              <button className="w-full btn bg-violet-600 text-white hover:bg-violet-900 border-violet-900 ease-in-out hover:border-violet-800 mt-5 duration-300">
                <MdOutlineEditNote className="text-xl"></MdOutlineEditNote>{" "}
                Update
              </button>
            </Link>
          ) : quantity == 0 ? (
            <button
              onClick={handleDisabledButton}
              className="w-full btn btn-outline hover:bg-gray-700 bg-gray-500 text-white hover:border-none border ease-in-out duration-300 mt-5 border-gray-500"
            >
              <LuShoppingCart className="text-lg"></LuShoppingCart> Order Food
            </button>
          ) : (
            <Link to={`/orderFood/${_id}`}>
              <button className="w-full btn btn-outline hover:bg-violet-700 dark:text-white hover:border-none border ease-in-out duration-300 mt-5 border-violet-500">
                <LuShoppingCart className="text-lg"></LuShoppingCart> Order Food
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleFoodDetails;
