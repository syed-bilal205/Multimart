import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItems } from "../features/cartSlice";
import { toast } from "react-toastify";

const ChairsProductsItems = ({ item }) => {
  const navigate = useNavigate();

  const handleProductClick = () => {
    navigate(`/productDetails/${item.id}`);
  };

  const dispatch = useDispatch();

  const addToCart = () => {
    // Passing items as a props
    dispatch(addItems(item));
    toast.success("Product has been added");
  };

  return (
    <>
      {/* <Link to={`productDetails/${item.id}`}> */}
      <div className="flex flex-wrap px-2 py-4  items-center justify-center gap-4">
        <div className="shadow rounded-md py-4 px-6 flex flex-col cursor-pointer gap-6 items-start">
          <img
            src={item.imgUrl}
            alt={item.productName}
            width={200}
            className="hover:scale-125 transition-all duration-700"
            onClick={handleProductClick}
          />
          <h4 className="font-bold text-xl">{item.productName}</h4>
          <span className="text-gray-400 text-sm -mt-5">{item.category}</span>
          <div className="flex items-center w-[100%] justify-between">
            <h6 className="font-semibold">${item.price}</h6>
            <button
              onClick={addToCart}
              className="ri-add-line bg-black flex items-center text-white rounded-full py-1 px-2"
            ></button>
          </div>
        </div>
      </div>
      {/* </Link> */}
    </>
  );
};

ChairsProductsItems.propTypes = {
  item: PropTypes.arrayOf(
    PropTypes.shape({
      imgUrl: PropTypes.string.isRequired,
      productName: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ChairsProductsItems;
