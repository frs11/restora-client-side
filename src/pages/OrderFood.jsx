import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate, useParams } from "react-router-dom";
import { axiosSecure } from "../Hooks/useAxios";
import Swal from "sweetalert2";
import { LuShoppingCart } from "react-icons/lu";
import { GiHamburger } from "react-icons/gi";
import moment from "moment/moment";
import { AuthContext } from "../Contexts/AuthProvider";
import swal from "sweetalert";

const OrderFood = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [SelectedFood, setSelectedFood] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [totalQuantity, setTotalQuantity] = useState(1);
  const date = moment().format("L");
  //   console.log(date);

  useEffect(() => {
    axiosSecure
      .get(`/foods/${id}`)
      .then((res) => {
        setSelectedFood(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const { _id, quantity, price, foodName, foodCategory } = SelectedFood || {};
  const [totalPrice, setTotalPrice] = useState(price);
  // console.log(totalPrice);

  const validateNumber = (number) => {
    const parsedNumber = parseInt(number);
    if (!isNaN(parsedNumber) && parsedNumber > 0 && parsedNumber <= quantity) {
      return parsedNumber;
    } else if (parsedNumber >= quantity) {
      return Swal.fire({
        title: "Warning!",
        text: "Exceded available quantity limit",
        icon: "error",
        confirmButtonText: "Ok!",
      });
    }
    return Swal.fire({
      title: "Warning!",
      text: "Enter a valid Quantity",
      icon: "error",
      confirmButtonText: "Ok!",
    });
  };

  const handleQuantity = (e) => {
    const newQuantity = e.target.value;
    validateNumber(newQuantity);
    setTotalQuantity(newQuantity);
    calculateTotalPrice(newQuantity);
  };
  const calculateTotalPrice = (newQuantity) => {
    const result = newQuantity * price;
    const parsedResult = parseFloat(result);
    // console.log(parsedResult);
    setTotalPrice(parsedResult.toFixed(2));
  };

  const handleOrderedFood = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const userName = form.get("userName");
    const userEmail = form.get("userEmail");
    const purchaseDate = date;
    const orderedQuantity = parseInt(totalQuantity);
    const stringPrice = form.get("price");
    const orderedPrice = parseFloat(stringPrice);
    // console.log("ordered Price: ", orderedPrice);

    const validationResult = validateNumber(totalQuantity);
    if (typeof validationResult == "number") {
      const remainingQuantity = quantity - totalQuantity;

      let orderedBy = {
        userName,
        userEmail,
      };
      const OrderItem = {
        orderedPrice,
        price,
        orderedQuantity,
        quantity,
        remainingQuantity,
        orderedBy,
        purchaseDate,
      };

      // console.log(OrderItem);

      axiosSecure
        .put(`/orderFood/${_id}`, OrderItem, { withCredentials: true })

        .then((res) => {
          // console.log(res.data);
          if (
            res.data?.addFoodResult?.insertedId &&
            res.data?.updateCountResult?.modifiedCount == 1
          ) {
            swal("Success!", "Food Ordered Successfully!", "success");
            navigate(-1);
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="py-24">
      <Helmet>
        <title>Restora | Order a Food</title>
      </Helmet>
      <h1 className="text-5xl mb-16 font-semibold text-center flex items-center justify-center">
        Purchase a Food <GiHamburger className="ml-2"></GiHamburger>
      </h1>
      <div className="w-9/12 mx-auto">
        {loading ? (
          <div className="w-full h-[20vh] flex justify-center items-center">
            <span className="loading loading-spinner loading-lg text-violet-400 mx-auto "></span>
          </div>
        ) : (
          <form onSubmit={handleOrderedFood} className="mt-10">
            <h1 className="text-center -mb-10">
              *You can only choose Quantity
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-8 mx-auto px-10 py-20 border-slate-200 bg-gray-100 dark:border-slate-600 border-2 dark:bg-slate-700 rounded-lg">
              <div className="form-control">
                <label className="">
                  <span className="ml-1 mb-1  font-medium">Name</span>
                  <input
                    type="text"
                    name="name"
                    defaultValue={foodName}
                    required
                    readOnly
                    placeholder="Food Name"
                    className="input w-full input-bordered text-gray-500 dark:text-gray-300 dark:bg-slate-800"
                  />
                </label>
              </div>

              <div className="form-control">
                <label className="">
                  <span className="ml-1 mb-1  font-medium">Category</span>
                  <input
                    type="text"
                    name="category"
                    defaultValue={foodCategory}
                    readOnly
                    required
                    placeholder="Category"
                    className="input w-full input-bordered text-gray-500 dark:text-gray-300 dark:bg-slate-800"
                  />
                </label>
              </div>

              <div className="form-control">
                <label className="">
                  <span className="ml-1 mb-1  font-medium">Food Price</span>
                  <input
                    type="number"
                    name="foodPrice"
                    value={price}
                    required
                    readOnly
                    step="any"
                    placeholder="Food Price"
                    className="input w-full input-bordered text-gray-500 dark:text-gray-300 dark:bg-slate-800"
                  />
                </label>
              </div>

              <div className="form-control">
                <label className="">
                  <span className="ml-1 mb-1  font-medium">Total Price</span>
                  <input
                    type="number"
                    name="price"
                    value={totalPrice ? totalPrice : price}
                    required
                    readOnly
                    step="any"
                    placeholder="Total Price"
                    className="input w-full input-bordered text-gray-500 dark:text-gray-300 dark:bg-slate-800"
                  />
                </label>
              </div>

              <div className="form-control">
                <label className="">
                  <span className="ml-1 mb-1  font-medium">
                    Available Quantity
                  </span>
                  <input
                    type="number"
                    name="availableQuantity"
                    value={quantity}
                    required
                    readOnly
                    placeholder="Quantity"
                    className="input w-full input-bordered text-gray-500 dark:text-gray-300 dark:bg-slate-800"
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="">
                  <span className="ml-1 mb-1  font-medium">Quantity</span>
                  <input
                    type="number"
                    name="quantity"
                    onChange={handleQuantity}
                    defaultValue={totalQuantity}
                    required
                    placeholder="Quantity"
                    className="input w-full input-bordered text-gray-500 dark:text-gray-300 dark:bg-slate-800"
                  />
                </label>
              </div>

              <div className="form-control">
                <label className="">
                  <span className="ml-1 mb-1  font-medium">Buyer Name</span>
                  <input
                    type="text"
                    name="userName"
                    value={user.displayName}
                    required
                    placeholder="Buyer Name"
                    readOnly
                    className="input w-full input-bordered text-gray-500 dark:text-gray-300 dark:bg-slate-800"
                  />
                </label>
              </div>

              <div className="form-control">
                <label className="">
                  <span className="ml-1 mb-1  font-medium">Buyer Email</span>
                  <input
                    type="email"
                    name="userEmail"
                    value={user.email}
                    required
                    placeholder="Buyer Email"
                    readOnly
                    className="input w-full input-bordered text-gray-500 dark:text-gray-300 dark:bg-slate-800"
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="">
                  <span className="ml-1 mb-1  font-medium">Purchase Date</span>
                  <input
                    type="text"
                    name="orderDate"
                    value={date}
                    required
                    readOnly
                    placeholder="Enter Date"
                    className="input w-full input-bordered text-gray-500 dark:text-gray-300 dark:bg-slate-800"
                  />
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center mt-5">
              <button
                type="submit"
                className="w-full btn btn-outline hover:bg-violet-700 dark:text-white hover:border-none border ease-in-out duration-300 mt-5 border-violet-500"
              >
                <LuShoppingCart className="text-lg"></LuShoppingCart> Purchase
                Food
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default OrderFood;
