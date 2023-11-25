import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { axiosSecure } from "../Hooks/useAxios";
import { MdOutlineEditNote } from "react-icons/md";
import { LuShoppingCart } from "react-icons/lu";

const SingleFoodDetails = () => {
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
  const { name } = addedBy || {};
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
        <div className="mt-8 grid grid-cols-2 gap-2">
          <Link to={`/foods/update/${_id}`}>
            <button className="w-full btn bg-violet-600 text-white hover:bg-violet-900 border-violet-900 ease-in-out hover:border-violet-800 duration-300">
              <MdOutlineEditNote className="text-xl"></MdOutlineEditNote> Update
            </button>
          </Link>{" "}
          <Link to={`/foods/foodOrder/${_id}`}>
            <button className="w-full btn btn-outline hover:bg-violet-700 dark:text-white hover:border-none border ease-in-out duration-300 border-violet-500">
              <LuShoppingCart className="text-lg"></LuShoppingCart> Order Food
            </button>
          </Link>{" "}
        </div>
      </div>
    </div>
  );
};

export default SingleFoodDetails;
