import Swal from "sweetalert2";
import { axiosSecure } from "../Hooks/useAxios";

const Subscribe = () => {
  const handleSubscribers = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    // console.log(email);
    const subscriber = { email };
    console.log(subscriber);

    axiosSecure
      .post("/subscribe", subscriber)
      .then((res) => {
        if (res.data?.insertedId) {
          Swal.fire({
            title: "Congratulations!!!",
            text: "You've Successfully Subscribed",
            icon: "success",
            confirmButtonText: "Ok",
          });
          e.target.reset();
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="subscribeBg flex flex-col lg:flex-row justify-center space-y-4 md:justify-evenly items-center w-10/12 mx-auto my-14 text-white h-[300px]">
      <div className="ml-5 text-center">
        <h1 className="text-2xl mb-6 md:mb-0 md:text-4xl font-medium dark:text-slate-200">
          Subscribe to <br />{" "}
          <p className="font-thin mt-2">
            Stay <span className="font-thin text-violet-400">Connected</span>{" "}
          </p>
        </h1>
      </div>
      <div className="lg:mr-8">
        <form onSubmit={handleSubscribers}>
          <input
            className="w-full lg:w-[300px] py-1.5 text-black dark:bg-slate-800 dark:text-slate-100 px-5 rounded-full"
            placeholder="Enter Your Email"
            type="email"
            name="email"
            required
          />
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="px-4 py-1.5 rounded-md border-2 bg-violet-900 border-violet-700 hover:border-violet-600 hover:bg-violet-700 duration-150 ease-in-out font-mono font-semibold text-white"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
