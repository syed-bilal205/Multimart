import PropTypes from "prop-types";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const Stars = ({ avgRating }) => {
  const starRating = Array.from({ length: 5 }, (item, index) => {
    let number = index + 0.5;

    return (
      <span key={index}>
        {avgRating >= index + 1 ? (
          <FaStar size={25} />
        ) : avgRating >= number ? (
          <FaStarHalfAlt size={25} />
        ) : (
          <AiOutlineStar size={25} />
        )}
      </span>
    );
  });

  return (
    <>
      <div className="flex text-yellow-500">
        {starRating}
        {/* <p className="text-gray-400">({reviews} customers reviews)</p> */}
      </div>
    </>
  );
};

Stars.propTypes = {
  avgRating: PropTypes.number.isRequired,
};

export default Stars;
