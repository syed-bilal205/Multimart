import Counter from "./Counter";
import ArmChairImage from "../assets/images/counter-timer-img.png";

const Banner = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row px-2  md:justify-between md:px-10 text-white items-center py-10 bg-blue-950">
        <div>
          <span className="">Limited Offer</span>
          <h6 className="-mt-[20px] font-bold text-4xl py-4">
            Quality Armchair
          </h6>
          <Counter />
        </div>
        <div>
          <img src={ArmChairImage} alt="Counter Chair" width={300} />
        </div>
      </div>
    </>
  );
};
export default Banner;
