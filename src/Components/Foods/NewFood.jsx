import PropTypes from "prop-types";

const NewFood = ({ newFood }) => {
  //   console.log(newFood);
  const { foodImage, foodName } = newFood || {};
  return (
    <div
      className="hero h-[180px] md:h-[200px] relative rounded-lg shadow-lg "
      style={{
        backgroundImage: `url(${foodImage})`,
      }}
    >
      <div className="absolute bottom-0 w-full rounded-b-lg text-center">
        <div className="">
          <h1 className=" bg-black bg-opacity-50 text-lg rounded-b-lg md:text-2xl text-white font-thin italic">
            {foodName}
          </h1>
        </div>
      </div>
    </div>
  );
};

NewFood.propTypes = {
  newFood: PropTypes.object.isRequired,
};

export default NewFood;
