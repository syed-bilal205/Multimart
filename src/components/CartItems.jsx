import { Link } from "react-router-dom";
// import img from "../assets/images/arm-chair-01.jpg";
import { AiFillDelete } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../features/cartSlice";

const CartItems = () => {
  const cartProducts = useSelector((state) => state.cart.cart);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();

  const handleDelete = (itemId) => {
    dispatch(removeItem(itemId));
  };

  return (
    <>
      <div className="flex flex-col md:flex-row gap-6 md:gap-0 items-center justify-between px-2 py-8">
        <div className="flex items-center justify-center flex-1">
          {cartProducts.length === 0 ? (
            <h1>No Product In Cart</h1>
          ) : (
            <table className="border border-black">
              <tr>
                <th className="p-4">Image</th>
                <th className="p-4">Title</th>
                <th className="p-4">Price</th>
                <th className="p-4">Qty</th>
                <th className="p-4">Delete</th>
              </tr>
              {cartProducts.map((item, index) => (
                <tr key={index}>
                  <td className="p-4">
                    <img src={item.image} alt="" width={80} />
                  </td>
                  <td className="p-4">{item.productName}</td>
                  <td className="p-4">${item.price}</td>
                  <td className="p-4">{item.quantity}px</td>
                  <td className="p-4">
                    <AiFillDelete
                      size={30}
                      className="cursor-pointer hover:text-red-700 text-blue-600"
                      onClick={() => handleDelete(item.id)}
                    />
                  </td>
                </tr>
              ))}
            </table>
          )}
        </div>
        <div className="flex flex-col gap-4 px-4">
          <div className="flex justify-between ">
            <h6 className="font-bold text-2xl">SubTotal</h6>
            <span className="font-bold text-2xl">${totalAmount}</span>
          </div>
          <p className="text-gray-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident,
            labore!
          </p>
          <div className="flex gap-4 flex-col ">
            <Link to="/billing">
              <button className="outline-none bg-blue-950 text-white rounded px-4 py-2 text-center cursor-pointer hover:bg-blue-900">
                Checkout
              </button>
            </Link>
            <Link to="/shop">
              <button className="outline-none bg-blue-950 text-white rounded px-4 py-2 text-center cursor-pointer hover:bg-blue-900">
                Continue Shopping
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default CartItems;
