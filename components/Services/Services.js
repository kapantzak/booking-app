import PropTypes from "prop-types";
import Service from "./Service";

const Services = ({ onServiceSelect }) => {
  // HARDCODED: Use a hook to get the services from the selected shop
  const services = [
    { id: 1, name: "Mens haircut" },
    { id: 2, name: "Womens haircut" },
  ];

  const serviceClickHandler = (service) => {
    onServiceSelect(service);
  };

  return (
    <div>
      {services.map(({ id, name }) => (
        <Service
          key={id}
          id={id}
          name={name}
          clickHandler={serviceClickHandler}
        />
      ))}
    </div>
  );
};

Services.defaultProps = {
  onServiceSelect: () => {},
};

Services.propTypes = {
  onServiceSelect: PropTypes.func,
};

export default Services;
