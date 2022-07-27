import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Service from "./Service";

const Services = ({ onServiceSelect }) => {
  // HARDCODED: Use a hook to get the services from the selected shop
  const services = [
    {
      id: 1,
      name: "Men's haircut",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imagePath: "/images/services/mens_haircut.png",
    },
    {
      id: 2,
      name: "Women's haircut",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras luctus hendrerit urna sed ultricies. Vivamus feugiat ligula at maximus finibus.",
      imagePath: "/images/services/womens_haircut.jpeg",
    },
    {
      id: 3,
      name: "Children's haircut",
      description:
        "Cras luctus hendrerit urna sed ultricies. Vivamus feugiat ligula at maximus finibus.",
      imagePath: "/images/services/children_haircut.jpeg",
    },
  ];

  const serviceClickHandler = (service) => {
    onServiceSelect(service);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      {services.map(({ id, name, description, imagePath }) => (
        <Service
          key={id}
          id={id}
          name={name}
          description={description}
          imagePath={imagePath}
          clickHandler={serviceClickHandler}
        />
      ))}
    </Box>
  );
};

Services.defaultProps = {
  onServiceSelect: () => {},
};

Services.propTypes = {
  onServiceSelect: PropTypes.func,
};

export default Services;
