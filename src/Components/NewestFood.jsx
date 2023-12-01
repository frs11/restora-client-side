import { useLoaderData } from "react-router-dom";
import NewFood from "./Foods/NewFood";

const NewestFood = () => {
  const foodData = useLoaderData();
  const newestFoods = foodData.slice(-3);
  //   console.log(newestFoods);
  return (
    <div className="w-10/12 bg-violet-50 dark:bg-slate-700 my-16 rounded py-10 px-5 mx-auto">
      <h1 className="text-center text-2xl md:text-3xl font-semibold mb-12">
        Discover our Latest Foods
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {newestFoods.map((newFood) => (
          <NewFood key={newFood._id} newFood={newFood}></NewFood>
        ))}
      </div>
    </div>
  );
};

export default NewestFood;
