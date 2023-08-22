import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <div className="flex flex-col py-10 gap-6 items-center">
        <h1 className="text-center  text-red-600 font-black text-9xl ">
          PAGE NOT FOUND
        </h1>
        <Link>
          <button className="outline-none bg-blue-700 text-white rounded px-4 py-2 text-center cursor-pointer hover:bg-white hover:text-black">
            Back To Home Page
          </button>
        </Link>
      </div>
    </>
  );
};
export default Error;
