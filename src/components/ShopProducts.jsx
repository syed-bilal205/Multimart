import { useState } from "react";
import productsData from "../data/products";
import ChairsProductsItems from "./ChairsProductsItems";

const ShopProducts = () => {
  const [products, setProducts] = useState(productsData);

  const handleFilter = (e) => {
    const filterItems = e.target.value;
    if (filterItems === "all") {
      setProducts(productsData);
    } else {
      const filtered = productsData.filter(
        (item) => item.category === filterItems
      );
      setProducts(filtered);
    }
  };

  const handleSearch = (e) => {
    const searchItems = e.target.value;
    const searchResult = productsData.filter((item) =>
      item.productName.toLowerCase().includes(searchItems.toLowerCase())
    );
    setProducts(searchResult);
  };

  return (
    <>
      <>
        <div className="flex flex-col gap-8 md:gap-0 md:flex-row justify-between px-2 md:px-10 py-6">
          <div className="md:flex-1">
            <select
              onChange={handleFilter}
              className="outline-none bg-blue-950 text-white rounded px-4 py-2 text-center cursor-pointer hover:bg-blue-900"
            >
              <option value="all">Filter By Category</option>
              <option value="sofa">Sofa</option>
              <option value="mobile">Mobile</option>
              <option value="chair">Chair</option>
              <option value="wireless">Wireless</option>
              <option value="watch">Watch</option>
            </select>
          </div>
          <div className="flex flex-col md:flex-row gap-6 md:flex-1">
            {/* <select className="outline-none bg-blue-950 text-white rounded px-2 py-2 text-center cursor-pointer hover:bg-blue-900">
              <option>Sort By</option>
              <option value="ascending">Ascending</option>
              <option value="descending">Descending</option>
            </select> */}
            <input
              type="text"
              placeholder="Search"
              className="w-[100%] px-4 py-1 outline-none border border-gray-200 rounded"
              onChange={handleSearch}
            />
          </div>
        </div>
        {
          <div className="flex flex-wrap px-2 py-4  items-center justify-center gap-4">
            {products.length === 0 ? (
              <h1>No Products Found</h1>
            ) : (
              products.map((item, index) => (
                <ChairsProductsItems key={index} item={item} />
              ))
            )}
          </div>
        }
      </>
    </>
  );
};
export default ShopProducts;
