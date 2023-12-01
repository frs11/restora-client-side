import { Helmet } from "react-helmet-async";
import Banner from "../Components/Banner";
import Subscribe from "../Components/Subscribe";
import NewestFood from "../Components/NewestFood";
import TopFoods from "../Components/TopFoods";

const Homepage = () => {
  return (
    <div>
      <Helmet>
        <title>Restora | Homepage | Order Your Favourite Food Anytime</title>
      </Helmet>
      <Banner></Banner>
      <TopFoods></TopFoods>
      <NewestFood></NewestFood>
      <Subscribe></Subscribe>
    </div>
  );
};

export default Homepage;
