import PropTypes from "prop-types";

const BgHeading = ({ text }) => {
  return (
    <>
      <div className="flex flex-col justify-center md:flex-row md:items-center py-8 px-4 md:px-12 md:py-8 bg-blue-500 ">
        <h1 className="text-white text-center text-8xl font-bold">{text}</h1>
      </div>
    </>
  );
};

BgHeading.propTypes = {
  text: PropTypes.string,
};

export default BgHeading;
