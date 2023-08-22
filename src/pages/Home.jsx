import Hero from "../components/Hero";
import Services from "../components/Services";
import TrendingProducts from "../components/TrendingProducts";
import Heading from "../components/Heading";
import BestSaleProducts from "../components/BestSaleProducts";
import Banner from "../components/Banner";
import NewProductsArrivals from "../components/NewProductsArrivals";
import PopularCategory from "../components/PopularCategory";

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Heading heading="Trending Products" />
      <TrendingProducts />
      <Heading heading="Best Sales" />
      <BestSaleProducts />
      <Banner />
      <Heading heading="New Arrivals" />
      <NewProductsArrivals />
      <Heading heading="Popular In Category" />
      <PopularCategory />
    </>
  );
};
export default Home;
