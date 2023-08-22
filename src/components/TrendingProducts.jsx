import { useEffect, useState } from "react";
import products from "../data/products";
import ChairsProductsItems from "./ChairsProductsItems";

const TrendingProducts = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);

  useEffect(() => {
    const filteredTrendingProducts = products.filter(
      (item) => item.category === "chair"
    );

    setTrendingProducts(filteredTrendingProducts.slice(0, 4));
  }, []);

  // console.log(trendingProducts);

  // const id = useParams();
  return (
    <>
      <div className="flex flex-wrap px-2 py-4  items-center justify-center gap-4">
        {trendingProducts.map((item, index) => (
          <ChairsProductsItems key={index} item={item} />
        ))}
      </div>
    </>
  );
};

export default TrendingProducts;
