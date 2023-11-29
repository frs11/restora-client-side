import { Helmet } from "react-helmet-async";
import Banner from "../Components/Banner";
import Subscribe from "../Components/Subscribe";

const Homepage = () => {
  return (
    <div>
      <Helmet>
        <title>Restora | Homepage | Order Your Favourite Food Anytime</title>
      </Helmet>
      <Banner></Banner>
      <Subscribe></Subscribe>
    </div>
  );
};

export default Homepage;
