import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { axiosSecure } from "../Hooks/useAxios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { MdOutlineEditNote } from "react-icons/md";

const FoodUpdate = () => {
  const { id } = useParams();
  const [SelectedFood, setSelectedFood] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axiosSecure
      .get(`/foods/${id}`)
      .then((res) => {
        setSelectedFood(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [id]);

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
  const { name, email } = addedBy || {};

  const validateNumber = (number) => {
    const parsedNumber = parseFloat(number);
    if (!isNaN(parsedNumber) && parsedNumber >= 0) {
      return parsedNumber;
    }
    return null;
  };

  const handleUpdateFood = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const image = form.get("image");
    const category = form.get("category");
    let price = form.get("price");
    let quantity = form.get("quantity");
    const origin = form.get("origin");
    const userName = form.get("userName");
    const userEmail = form.get("userEmail");
    const description = form.get("description");

    const newPrice = validateNumber(price);
    const newQuantity = validateNumber(quantity);

    if (!newPrice) {
      return Swal.fire({
        title: "Warning!",
        text: "Enter a valid Price",
        icon: "error",
        confirmButtonText: "Ok!",
      });
    }
    if (!newQuantity) {
      return Swal.fire({
        title: "Warning!",
        text: "Enter a valid Quantity",
        icon: "error",
        confirmButtonText: "Ok!",
      });
    } else {
      price = newPrice;
      quantity = newQuantity;
      let addedBy = {
        userName,
        userEmail,
      };
      const updatedFood = {
        name,
        image,
        category,
        price,
        quantity,
        origin,
        addedBy,
        description,
      };

      axiosSecure
        .put(`/foods/update?id=${_id}`, updatedFood)

        .then((res) => {
          //   console.log(res.data);
          if (res.data?.modifiedCount > 0) {
            Swal.fire({
              title: "Success!!!",
              text: "Food Updated Successfully",
              icon: "success",
              confirmButtonText: "Exit",
            });
            e.target.reset();
            navigate(-1);
          }
        });
    }
  };

  return (
    <div className="pt-20 pb-36 headerbg text-white">
      <Helmet>
        <title>Restora | Update a Food</title>
      </Helmet>
      <h1 className="text-5xl mb-24 font-semibold text-center">
        Update a Food
      </h1>
      <div className="w-9/12 mx-auto">
        {loading ? (
          <div className="w-full h-[20vh] flex justify-center items-center">
            <span className="loading loading-spinner loading-lg text-violet-400 mx-auto "></span>
          </div>
        ) : (
          <form onSubmit={handleUpdateFood} className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-8 mx-auto">
              <div className="form-control">
                <label className="">
                  <span className="ml-1 mb-1  font-medium">Name</span>
                  <input
                    type="text"
                    name="name"
                    defaultValue={foodName}
                    required
                    placeholder="Food Name"
                    className="input w-full input-bordered text-black"
                  />
                </label>
              </div>

              <div className="form-control">
                <label className="">
                  <span className="ml-1 mb-1  font-medium">Image</span>
                  <input
                    type="text"
                    name="image"
                    defaultValue={foodImage}
                    required
                    placeholder="Image URL"
                    className="input input-bordered w-full text-black"
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
                    required
                    placeholder="Category"
                    className="input w-full input-bordered text-black"
                  />
                </label>
              </div>

              <div className="form-control">
                <label className="">
                  <span className="ml-1 mb-1  font-medium">Price</span>
                  <input
                    type="number"
                    name="price"
                    defaultValue={price}
                    required
                    step="any"
                    placeholder="Price"
                    className="input input-bordered w-full text-black"
                  />
                </label>
              </div>

              <div className="form-control">
                <label className="">
                  <span className="ml-1 mb-1  font-medium">Quantity</span>
                  <input
                    type="number"
                    name="quantity"
                    defaultValue={quantity}
                    required
                    placeholder="Quantity"
                    className="input input-bordered w-full text-black"
                  />
                </label>
              </div>

              <div className="form-control">
                <label className="">
                  <span className="ml-1 mb-1  font-medium">Origin</span>
                  <input
                    type="text"
                    name="origin"
                    defaultValue={foodOrigin}
                    required
                    placeholder="Origin Country"
                    className="input input-bordered w-full text-black"
                  />
                </label>
              </div>

              <div className="form-control">
                <label className="">
                  <span className="ml-1 mb-1  font-medium">
                    Updated By User
                  </span>
                  <input
                    type="text"
                    name="userName"
                    value={name}
                    required
                    placeholder="User Name"
                    readOnly
                    className="input input-bordered w-full text-gray-500"
                  />
                </label>
              </div>

              <div className="form-control">
                <label className="">
                  <span className="ml-1 mb-1  font-medium">User Email</span>
                  <input
                    type="email"
                    name="userEmail"
                    value={email}
                    required
                    placeholder="User Email"
                    readOnly
                    className="input input-bordered w-full text-gray-500"
                  />
                </label>
              </div>

              <div className="form-control md:col-span-2">
                <label className="">
                  <span className=" font-medium">Description</span>
                  <input
                    type="text"
                    name="description"
                    defaultValue={description}
                    required
                    placeholder="Short Description"
                    className="input input-bordered h-20 w-full text-black"
                  />
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center mt-5">
              <button
                type="submit"
                className="w-full btn bg-violet-600 text-white hover:bg-violet-900 border-violet-900 ease-in-out hover:border-violet-800 duration-300"
              >
                <MdOutlineEditNote className="text-xl"></MdOutlineEditNote>{" "}
                Update
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default FoodUpdate;
