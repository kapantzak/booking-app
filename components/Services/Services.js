import PropTypes from "prop-types";
import { useRouter } from "next/router";
import Service from "./Service";

const Services = ({ services }) => {
  const router = useRouter();
  const serviceClickHandler = (id) => {
    router.push({
      pathname: "/calendar",
      query: { service: id },
    });
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
  services: [],
};

Services.propTypes = {
  services: PropTypes.array,
};

export default Services;
