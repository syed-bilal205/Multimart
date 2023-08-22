import PropTypes from "prop-types";

const Reviews = ({ reviews }) => {
  return (
    <>
      <div className="py-6">
        <ul className="py-3">
          {reviews.map((item, index) => (
            <li key={index}>
              <span>{item.rating} (average rating)</span>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-4 py-6 items-center justify-center">
        <h6 className="font-bold text-3xl ">Leave your experience</h6>
        <form className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Name"
            className="w-[100%] px-4 py-1 outline-none border border-gray-400 rounded"
          />
          <textarea
            placeholder="Send Message"
            cols="30"
            rows="10"
            className="w-[100%] px-4 py-1 outline-none border border-gray-400 rounded"
          />
          <button className="outline-none bg-blue-950 text-white rounded px-4 py-2 text-center cursor-pointer hover:bg-blue-900">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      rating: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Reviews;
