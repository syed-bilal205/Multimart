import { useEffect, useState } from "react";
import products from "../data/products";
import ChairsProductsItems from "./ChairsProductsItems";

const BestSaleProducts = () => {
  const [saleProducts, setSaleProducts] = useState([]);

  useEffect(() => {
    const filteredSaleProducts = products.filter(
      (item) => item.category === "sofa"
    );

    setSaleProducts(filteredSaleProducts.slice(0, 4));
  }, []);

  return (
    <>
      <div className="flex flex-wrap  py-4  items-center justify-center gap-1 px-2">
        {saleProducts.map((item, index) => (
          <ChairsProductsItems key={index} item={item} />
        ))}
      </div>
    </>
  );
};
export default BestSaleProducts;
