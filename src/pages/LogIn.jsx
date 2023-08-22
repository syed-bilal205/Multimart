import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const logIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCrenditals = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setLoading(false);
      toast.success("Successfully login");
      navigate("/checkout");
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };

  return (
    <>
      <div className="px-10 py-12">
        <div className="flex bg-blue-950 flex-col py-8 items-center justify-center rounded">
          <h4 className="py-6 font-bold text-4xl text-white">Login</h4>
          {loading ? (
            <h1 className="text-white font-bold text-2xl">Loading....</h1>
          ) : (
            <form className="flex flex-col gap-6" onSubmit={logIn}>
              <input
                type="email"
                placeholder="Enter your Email"
                autoComplete="off"
                className="px-6 py-2 outline-none rounded"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <input
                type="password"
                placeholder="Enter your Password"
                autoComplete="off"
                className="px-6 py-2 outline-none rounded"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <button className="outline-none bg-blue-700 text-white rounded px-4 py-2 text-center cursor-pointer hover:bg-white hover:text-black">
                Login
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
};
export default LogIn;
