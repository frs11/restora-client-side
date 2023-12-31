import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2 text-white dark:text-slate-300 headerbg">
      <div className="flex flex-col justify-center items-center">
        <div className="w-[90%] py-10 lg:w-[80%] text-center">
          <p className="text-2xl lg:text-4xl mb-3">
            Indulge in Culinary Excellence <br /> at{" "}
            <span className="font-logoFont text-white">
              Res
              <span className="text-violet-300 dark:text-violet-400">tora</span>
            </span>
          </p>
          <p className="text-xs md:text-sm text-gray-200 dark:text-gray-300 px-5 lg:px-10">
            Savor exquisite flavors meticulously crafted to tantalize your taste
            buds. Immerse yourself in an unparalleled dining experience that
            seamlessly blends sophistication with culinary innovation.
          </p>
          <Link to="/allFoodItems">
            <button className="mt-4 px-4 py-2 rounded border-2 border-violet-400 hover:border-violet-600 hover:bg-violet-700  duration-150 ease-in-out font-semibold text-white">
              View Foods
            </button>
          </Link>
        </div>
      </div>
      <div className="hidden md:flex justify-end">
        <img
          src="https://i.ibb.co/pX4PW9n/portrait-happy-male-chef-dressed-uniform-removebg-preview.png"
          alt="Banner Image"
        />
      </div>
    </div>
  );
};

export default Banner;
