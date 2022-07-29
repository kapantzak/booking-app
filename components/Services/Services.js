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

const Services = ({
  initialServices,
  onServiceSelectionChange,
  onFinalServiceSelect,
}) => {
  const [selectedServices, setSelectedServices] = useState(initialServices);
  const selectedServicesIds = selectedServices.map(({ id }) => id);

  const serviceSelectionHandler = (service) => {
    const newSelectedServices = [...selectedServices, service];
    setSelectedServices(newSelectedServices);
    onServiceSelectionChange(newSelectedServices);
  };

  const serviceDeselectionHandler = (service) => {
    const newSelectedServices = selectedServices.filter(
      ({ id }) => id !== service.id
    );
    setSelectedServices(newSelectedServices);
    onServiceSelectionChange(newSelectedServices);
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
      }}
    >
      {services.map((service) => {
        const serviceSelected = selectedServicesIds.includes(service.id);

        return (
          <Service
            key={JSON.stringify(service)}
            service={service}
            initiallySelected={serviceSelected}
            onServiceSelect={serviceSelectionHandler}
            onServiceDeselect={serviceDeselectionHandler}
            onFinalServiceSelect={finalServiceSelectionHandler}
          />
        );
      })}
    </Box>
  );
};

Services.defaultProps = {
  initialServices: [],
  onServiceSelectionChange: () => {},
  onFinalServiceSelect: () => {},
};

Services.propTypes = {
  initialServices: PropTypes.array,
  onServiceSelectionChange: PropTypes.func,
  onServiceSelect: PropTypes.func,
};

export default Services;
