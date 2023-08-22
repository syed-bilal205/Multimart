import PropTypes from "prop-types";

const ServicesItems = ({ item }) => {
  return (
    <>
      <div
        style={{ backgroundColor: item.bg }}
        className="md:py-4 py-6 md:px-2 px-4 rounded transition-all hover:scale-110 duration-700 cursor-pointer flex gap-2"
      >
        <div className="text-4xl bg-black text-white rounded-full flex items-center p-1">
          <i className={item.icon}> </i>
        </div>
        <div>
          <h6 className="text-black font-semibold">{item.title}</h6>
          <p>{item.subtitle}</p>
        </div>
      </div>
    </>
  );
};

ServicesItems.propTypes = {
  item: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    bg: PropTypes.string.isRequired,
  }).isRequired,
};

export default ServicesItems;
