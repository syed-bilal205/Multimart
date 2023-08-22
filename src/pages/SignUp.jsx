import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase.config";
import { toast } from "react-toastify";
import { storage } from "../firebase.config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../firebase.config";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const naviagte = useNavigate();

  const sighUp = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCrendential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCrendential.user;
      const storageRef = ref(storage, `images/${Date.now() + name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          toast.error(error.message);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(name, {
              displayName: name,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, "user", user.uid), {
              uid: user.uid,
              displayName: name,
              email,
              photoURL: downloadURL,
            });
          });
        }
      );

      console.log(user);
      setLoading(false);
      toast.success("Account created");
      naviagte("/login");
    } catch (error) {
      setLoading(false);
      toString.error("Something went wrong");
    }
  };

  return (
    <>
      <div className="px-10 py-10 ">
        <div className="flex bg-blue-950 flex-col py-8 items-center justify-center rounded">
          <h4 className="py-6 font-bold text-4xl text-white">Signup</h4>
          {loading ? (
            <h1 className="text-white font-bold text-2xl">Loading....</h1>
          ) : (
            <form className="flex flex-col gap-6" onSubmit={sighUp}>
              <input
                type="name"
                placeholder="Enter your Name"
                autoComplete="off"
                className="px-6 py-2 outline-none rounded"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Enter your Email"
                autoComplete="off"
                className="px-6 py-2 outline-none rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Enter your Password"
                autoComplete="off"
                className="px-6 py-2 outline-none rounded"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <input
                type="file"
                id="avatar"
                name="avatar"
                accept="image/png, image/jpeg"
                className="text-white"
                onChange={(e) => setFile(e.target.files[0])}
              />
              <button className="outline-none bg-blue-700 text-white rounded px-4 py-2 text-center cursor-pointer hover:bg-white hover:text-black">
                SignUp
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
};
export default SignUp;
