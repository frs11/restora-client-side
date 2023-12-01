import { Helmet } from "react-helmet-async";
import Banner from "../Components/Banner";
import Subscribe from "../Components/Subscribe";
import NewestFood from "../Components/NewestFood";

const Homepage = () => {
  return (
    <div>
      <Helmet>
        <title>Restora | Homepage | Order Your Favourite Food Anytime</title>
      </Helmet>
      <Banner></Banner>
      <NewestFood></NewestFood>
      <Subscribe></Subscribe>
    </div>
  );
};

export default Homepage;
