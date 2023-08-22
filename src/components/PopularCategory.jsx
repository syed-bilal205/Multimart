import products from "../data/products";
import { useState, useEffect } from "react";
import ChairsProductsItems from "./ChairsProductsItems";

const PopularCategory = () => {
  const [watches, setWatches] = useState([]);
  useEffect(() => {
    const filteredWatches = products.filter(
      (item) => item.category === "watch"
    );

    setWatches(filteredWatches);
  }, []);

  return (
    <>
      <div className="flex flex-wrap px-2 py-4  items-center justify-center gap-4">
        {watches.map((item, index) => (
          <ChairsProductsItems key={index} item={item} />
        ))}
      </div>
    </>
  );
};
export default PopularCategory;
