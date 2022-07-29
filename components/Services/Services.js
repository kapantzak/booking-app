import PropTypes from "prop-types";
import { useState } from "react";
import { Box } from "@mui/material";
import Service from "./Service";

// HARDCODED: Use a hook to get the services from the selected shop
const services = [
  {
    id: 1,
    name: "Men's haircut",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imagePath: "/images/services/mens_haircut.png",
    durationInMinutes: 30,
  },
  {
    id: 2,
    name: "Women's haircut",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras luctus hendrerit urna sed ultricies. Vivamus feugiat ligula at maximus finibus.",
    imagePath: "/images/services/womens_haircut.jpeg",
    durationInMinutes: 60,
  },
  {
    id: 3,
    name: "Children's haircut",
    description:
      "Cras luctus hendrerit urna sed ultricies. Vivamus feugiat ligula at maximus finibus.",
    imagePath: "/images/services/children_haircut.jpeg",
    durationInMinutes: 15,
  },
];

const Services = ({ onFinalServiceSelect }) => {
  const [selectedServices, setSelectedServices] = useState([]);

  const serviceSelectionHandler = (service) => {
    setSelectedServices([...selectedServices, service]);
  };

  const serviceDeselectionHandler = (service) => {
    setSelectedServices(selectedServices.filter(({ id }) => id !== service.id));
  };

  const finalServiceSelectionHandler = (service) => {
    onFinalServiceSelect([service, ...selectedServices]);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "start",
        flexDirection: "row",
        flexWrap: "wrap",
        paddingX: 2,
      }}
    >
      {services.map((service) => (
        <Service
          key={JSON.stringify(service)}
          service={service}
          onServiceSelect={serviceSelectionHandler}
          onServiceDeselect={serviceDeselectionHandler}
          onFinalServiceSelect={finalServiceSelectionHandler}
        />
      ))}
    </Box>
  );
};

Services.defaultProps = {
  onFinalServiceSelect: () => {},
};

Services.propTypes = {
  onServiceSelect: PropTypes.func,
};

export default Services;
