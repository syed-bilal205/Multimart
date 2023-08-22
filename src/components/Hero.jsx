import HeroImage from "../assets/images/hero-img.png";

const Hero = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="flex flex-col md:flex-row md:items-center py-6 px-4 md:px-12 md:py-4 bg-purple-300 md:h-screen">
        <div className="flex flex-col py-6 gap-4 md:w-[50%]">
          <span className="font-medium -mb-6">
            Trending Products In {currentYear}
          </span>
          <h4 className="text-5xl font-bold">
            Make Your Interior More Minimalistic & Modern
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
            suscipit et exercitationem ratione illo deserunt deleniti in debitis
            facilis quod!
          </p>
          <div>
            <button className="px-2 py-2 bg-purple-950 text-white rounded">
              Shop Now
            </button>
          </div>
        </div>
        <div className="">
          <img src={HeroImage} alt="Hero Banner" />
        </div>
      </div>
    </>
  );
};
export default Hero;
