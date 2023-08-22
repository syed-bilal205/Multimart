import serviceData from "../data/serviceData";
import ServicesItems from "./ServicesItems";

const Services = () => {
  return (
    <>
      <div className="flex flex-wrap  items-center px-2 justify-center py-6 gap-4">
        {serviceData.map((item, index) => (
          <ServicesItems item={item} key={index} />
        ))}
      </div>
    </>
  );
};
export default Services;
