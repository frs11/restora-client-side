import { Helmet } from "react-helmet-async";
import Banner from "../Components/Banner";

const Homepage = () => {
  return (
    <div>
      <Helmet>
        <title>Restora | Homepage | Order Your Favourite Food Anytime</title>
      </Helmet>
      <Banner></Banner>
    </div>
  );
};

export default Homepage;
