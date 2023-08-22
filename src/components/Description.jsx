import PropTypes from "prop-types";

const Description = ({ description }) => {
  return (
    <>
      <div className="py-6">
        <p>{description}</p>
      </div>
    </>
  );
};

Description.propTypes = {
  description: PropTypes.string.isRequired,
};

export default Description;
