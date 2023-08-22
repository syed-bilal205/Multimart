import BgHeading from "../components/BgHeading";
import { useSelector } from "react-redux";

const Billing = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const shippingAmount = useSelector((state) => state.cart.shippingAmount);
  return (
    <>
      <BgHeading text="CheckOut" />
      <div className="flex flex-col items-center justify-center gap-4 md:flex-row px-2 py-8 md:px-10">
        <div className="flex flex-col w-[80%] gap-6 flex-1">
          <h6 className="font-bold text-3xl">Billing Address</h6>
          <form className="flex flex-col gap-3 ">
            <input
              type="text"
              placeholder="Enter your name"
              className=" py-2 outline-none px-2 rounded border border-gray w-[100%]"
            />
            <input
              type="email"
              placeholder="Enter your email"
              className=" py-2 outline-none px-2 rounded border border-gray w-[100%]"
            />
            <input
              type="phone"
              placeholder="Enter your number"
              className=" py-2 outline-none px-2 rounded border border-gray w-[100%]"
            />
            <input
              type="address"
              placeholder="Street address"
              className=" py-2 outline-none px-2 rounded border border-gray w-[100%]"
            />
            <input
              type="city"
              placeholder="City"
              className=" py-2 outline-none px-2 rounded border border-gray w-[100%]"
            />
            <input
              type="postal"
              placeholder="Postal code"
              className=" py-2 outline-none px-2 rounded border border-gray w-[100%]"
            />
            <input
              type="country"
              placeholder="Country"
              className=" py-2 outline-none px-2 rounded border border-gray w-[100%]"
            />
          </form>
        </div>
        <div className="flex-1 w-[80%] px-4 text-center bg-blue-950 gap-2 rounded py-4 text-white flex flex-col items-center justify-center">
          <div className="flex justify-between items-center text-center md:w-[50%] w-[100%]">
            <h6 className="text-white font-bold">Total Qty</h6>
            <span className="text-white font-bold">{quantity}</span>
          </div>
          <div className="flex justify-between items-center md:w-[50%] text-center w-[100%]">
            <h6 className="text-white font-bold">SubTotal</h6>
            <span className="text-white font-bold">{totalAmount}</span>
          </div>
          <div className="flex text-center justify-between items-center md:w-[50%] w-[100%]">
            <h6 className="text-white font-bold">Shipping</h6>
            <span className="text-white font-bold">$50</span>
          </div>
          <hr />
          <div className="flex justify-between text-center items-center md:w-[50%] w-[100%]">
            <h4 className="text-white font-bold">Total</h4>
            <span className="text-white font-bold">${shippingAmount}</span>
          </div>
          <button className="outline-none bg-blue-700 text-white rounded px-4 py-2 text-center cursor-pointer hover:bg-white hover:text-black">
            Place Order Now
          </button>
        </div>
      </div>
    </>
  );
};
export default Billing;
