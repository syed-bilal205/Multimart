import { useParams } from "react-router-dom";
import products from "../data/products";
import BgHeading from "../components/BgHeading";
import bGImage from "../assets/images/shop.jpg";
import Description from "../components/Description";
import Reviews from "../components/Reviews";
import { useState } from "react";
import Stars from "../components/Stars";

const ProductDetails = () => {
  const [activeTab, setActiveTab] = useState("description");
  const { id } = useParams();
  const product = products.find((item) => item.id === id);

  const {
    imgUrl,
    shortDesc,
    productName,
    price,
    avgRating,
    reviews,
    description,
    category,
  } = product;

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <BgHeading bGImage={bGImage} text={productName} />
      <div className="md:px-10 px-2 py-6 flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1">
          <img src={imgUrl} alt="detail image" width={400} />
        </div>
        <div className="flex flex-col flex-1 gap-6">
          <h2 className="text-3xl font-bold">{productName}</h2>
          <div className="flex items-center justify-between w-[40%]">
            <Stars avgRating={avgRating} />
            <p className="text-gray-500">{avgRating} ratings</p>
          </div>
          <div className="flex items-center justify-between w-[33%]">
            <h6 className="font-semibold text-2xl">${price}</h6>
            <p className="text-gray-500 capitalize">Category {category}</p>
          </div>
          <p className="text-gray-500">{shortDesc}</p>
          <button className="outline-none bg-blue-950 text-white rounded px-4 py-2 text-center cursor-pointer hover:bg-blue-900">
            Add to cart
          </button>
        </div>
      </div>

      <div className="px-2 md:px-10">
        <div className="flex gap-4">
          <button
            onClick={() => handleTabChange("description")}
            className="bg-blue-950
             text-white rounded px-4 py-2 text-center cursor-pointer hover:bg-blue-900"
          >
            Description
          </button>
          <button
            onClick={() => handleTabChange("reviews")}
            className="bg-blue-950
             text-white rounded px-4 py-2 text-center cursor-pointer hover:bg-blue-900"
          >
            Reviews ({reviews.length})
          </button>
        </div>
        {activeTab === "description" ? (
          <Description description={description} />
        ) : (
          <Reviews reviews={reviews} />
        )}
      </div>
    </>
  );
};
export default ProductDetails;
