import PropTypes from "prop-types";

const Heading = ({ heading }) => {
  return (
    <>
      <div className="flex items-center justify-center py-6">
        <h3 className="font-bold text-4xl">{heading}</h3>
      </div>
    </>
  );
};

Heading.propTypes = {
  heading: PropTypes.string.isRequired,
};

export default Heading;
