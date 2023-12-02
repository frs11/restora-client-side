import PropTypes from "prop-types";
import Swal from "sweetalert2";
import { axiosSecure } from "../../Hooks/useAxios";

const OrderedFoodData = ({ foodData }) => {
  const {
    _id,
    foodName,
    foodImage,
    foodCategory,
    purchaseDate,
    price,
    addedBy,
  } = foodData || {};

  const handleDeleteButton = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/order/delete/${_id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Purchase has been deleted.",
                icon: "success",
              });
            }
          })
          .catch((err) => console.log(err));
      }
    });
  };

  return (
    <div>
      <div className="dark:bg-slate-700 bg-slate-200 rounded-md px-3 py-2 mb-4">
        <div className="flex justify-center mb-6">
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
            <span className="font-semibold">Price: </span> {price}
          </h1>
          <h1 className="mt-2 text-slate-900 dark:text-slate-100 ">
            <span className="font-semibold">Purchase Date: </span>{" "}
            {purchaseDate}
          </h1>
          <h1 className="mt-2 text-slate-900 dark:text-slate-100 ">
            <span className="font-semibold">Added By: </span> {addedBy.name}
          </h1>
        </div>
      </div>
      <button
        onClick={handleDeleteButton}
        className="w-full btn bg-red-700 text-white hover:bg-red-900 border-red-800 ease-in-out hover:border-red-800 duration-300"
      >
        Delete Order
      </button>
    </div>
  );
};
OrderedFoodData.propTypes = {
  foodData: PropTypes.object.isRequired,
};

export default OrderedFoodData;
