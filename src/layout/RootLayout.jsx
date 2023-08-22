import { Outlet, NavLink, Link } from "react-router-dom";
import { CgMenu, CgClose } from "react-icons/cg";
import Logo from "../assets/images/eco-logo.png";
import UserImg from "../assets/images/user-icon.png";
import { BsFillCartCheckFill } from "react-icons/bs";
import { useState } from "react";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import useAuth from "../custom-hook/useAuth";
import { auth } from "../firebase.config";
import { toast } from "react-toastify";

const RootLayout = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [closeOpen, setCloseOpen] = useState(false);

  const { currentUser } = useAuth();

  const quantity = useSelector((state) => state.cart.quantity);

  const toggleOption = () => {
    setShowOptions(!showOptions);
  };

  const handleMenuClick = () => {
    setCloseOpen(!closeOpen);
  };

  const logout = () => {
    signOut(auth)
      .then(() => toast.success("Logout"))
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <>
      <header className="sticky top-0 flex z-50  items-center justify-between px-4 md:px-10 py-4  bg-white shadow-md">
        <div className="z-50 ">
          <Link to="/" className="flex items-center">
            <img src={Logo} alt="Logo" className="w-10" />
            <h6 className="font-black text-2xl">Multimart</h6>
          </Link>
        </div>
        <div>
          <ul className="md:flex hidden gap-6 text-xl font-bold">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/shop">Shop</NavLink>
            </li>
            <li>
              <NavLink to="/checkout">Cart</NavLink>
            </li>
          </ul>
        </div>

        <div className="flex  items-center gap-4">
          <Link to="/checkout" className="flex items-center gap-2 relative">
            <BsFillCartCheckFill size={30} className="text-black " />
            <span className=" rounded-full  text-black absolute -right-2 -top-3 font-semibold text-base">
              {quantity}
            </span>
          </Link>
          <img
            src={currentUser ? currentUser.photoURL : UserImg}
            alt="use"
            className="w-12 cursor-pointer"
            onClick={toggleOption}
          />
          {/* <p>{currentUser.displayName}</p> */}
          {showOptions && (
            <div className="absolute top-12 right-0 mt-2 mr-2 bg-white p-2 rounded shadow">
              <Link
                className="block mb-2 w-full px-4 py-2 font-bold text-black rounded"
                to="/login"
              >
                {currentUser ? <span onClick={logout}>Logout</span> : "Login"}
              </Link>
              <Link
                className="block w-full px-4 py-2 font-bold text-black rounded"
                to="/signup"
              >
                SignUp
              </Link>
            </div>
          )}
        </div>

        {/* MOBILE NAVBAR */}
        <div
          onClick={handleMenuClick}
          className="md:hidden cursor-pointer z-50"
        >
          {closeOpen ? <CgClose size={30} /> : <CgMenu size={30} />}
        </div>
      </header>

      <div
        className={`fixed top-0 right-0 bg-white ease-in-out duration-700 w-[100%] h-[100%] flex justify-center py-6 items-center text-4xl shadow ${
          closeOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="uppercase text-3xl flex flex-col gap-4 font-bold text-center">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </div>

      <main>
        <Outlet />
      </main>
    </>
  );
};
export default RootLayout;
