import products from "../data/products";
import { useState, useEffect } from "react";
import ChairsProductsItems from "./ChairsProductsItems";

const NewProductsArrivals = () => {
  const [arrivals, setArrivals] = useState([]);

  useEffect(() => {
    const filteredArrivals = products.filter(
      (item) => item.category === "mobile"
    );

    // console.log(filteredArrivals);

    const filteredWireless = products.filter(
      (item) => item.category === "wireless"
    );

    const combineArrivals = [...filteredArrivals, ...filteredWireless];
    // console.log(filteredWireless);
    setArrivals(combineArrivals);
  }, []);

  return (
    <>
      <div className="flex flex-wrap px-2 py-4  items-center justify-center gap-4">
        {arrivals.map((item, index) => (
          <ChairsProductsItems key={index} item={item} />
        ))}
      </div>
    </>
  );
};
export default NewProductsArrivals;
