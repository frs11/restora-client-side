import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Contexts/AuthProvider";
import { Helmet } from "react-helmet-async";
import { axiosSecure } from "../Hooks/useAxios";
import { MdFormatListBulletedAdd } from "react-icons/md";

const AddFood = () => {
  const { user } = useContext(AuthContext);
  // console.log(user);

  const validateNumber = (number) => {
    const parsedNumber = parseFloat(number);
    if (!isNaN(parsedNumber) && parsedNumber >= 0) {
      return parsedNumber;
    }
    return null;
  };

  const handleAddFood = (e) => {
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
      const newFood = {
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
        .post("/foods", newFood)

        .then((res) => {
          if (res.data?.insertedId) {
            Swal.fire({
              title: "Success!!!",
              text: "Food Added Successfully",
              icon: "success",
              confirmButtonText: "Exit",
            });
          }
        });

      e.target.reset();
      console.log("added Food Details ", newFood);
    }
  };
  return (
    <div className="pt-20 pb-36 headerbg text-white">
      <Helmet>
        <title>Restora | {user.displayName} | Add a Food</title>
      </Helmet>
      <h1 className="text-5xl mb-24 font-semibold text-center">Add a Food</h1>
      <div className="w-9/12 mx-auto">
        <form onSubmit={handleAddFood} className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-8 mx-auto">
            <div className="form-control">
              <label className="">
                <span className="ml-1 mb-1  font-medium">Name</span>
                <input
                  type="text"
                  name="name"
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
                  required
                  placeholder="Origin Country"
                  className="input input-bordered w-full text-black"
                />
              </label>
            </div>

            <div className="form-control">
              <label className="">
                <span className="ml-1 mb-1  font-medium">Added By User</span>
                <input
                  type="text"
                  name="userName"
                  defaultValue={user.displayName}
                  required
                  placeholder="User Name"
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
                  defaultValue={user.email}
                  required
                  placeholder="User Email"
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
              value="Add Product"
              className="flex items-center justify-center px-2 py-3 bg-violet-600 font-medium text-lg hover:bg-violet-800 hover:text-white ease-in-out duration-300 cursor-pointer w-full mx-auto rounded-lg"
            >
              <MdFormatListBulletedAdd className="text-xl mr-2"></MdFormatListBulletedAdd>{" "}
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFood;
