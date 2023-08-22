import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import RootLayout from "./layout/RootLayout";
import ProtectedRoutes from "./layout/ProtectedRoutes";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import SignUp from "./pages/SignUp";
import CheckOut from "./pages/CheckOut";
import LogIn from "./pages/LogIn";

import Error from "./pages/Error";

import Footer from "./components/Footer";
import Billing from "./pages/Billing";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="shop" element={<Shop />} />
      <Route path="checkout" element={<CheckOut />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="productDetails/:id" element={<ProductDetails />} />
      <Route path="login" element={<LogIn />} />
      <Route
        path="billing"
        element={
          <ProtectedRoutes>
            <Billing />
          </ProtectedRoutes>
        }
      ></Route>
      <Route path="*" element={<Error />} />
    </Route>
  )
);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <Footer />
    </>
  );
};
export default App;
