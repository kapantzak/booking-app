import PropTypes from "prop-types";
import { useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

const Service = ({ service, onServiceSelect, onFinalServiceSelect }) => {
  const { name, description, imagePath, durationInMinutes } = service;
  const [isSelected, setIsSelected] = useState(false);

  const serviceSelectionHandler = () => {
    setIsSelected(!isSelected);
    onServiceSelect(service);
  };

  return (
    <Card
      raised={isSelected}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        maxWidth: 345,
        m: 1,
      }}
    >
      <div>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={imagePath}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {`${name} (${durationInMinutes}')`}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </div>
      <CardActions>
        <Button size="small" onClick={serviceSelectionHandler}>
          {!isSelected ? "Select" : "Remove"}
        </Button>
        {!isSelected && (
          <Button size="small" onClick={() => onFinalServiceSelect(service)}>
            Select and proceed
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

Service.defaultProps = {
  onServiceSelect: () => {},
  onFinalServiceSelect: () => {},
};

Service.propTypes = {
  service: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imagePath: PropTypes.string,
    durationInMinutes: PropTypes.number.isRequired,
  }).isRequired,
  onServiceSelect: PropTypes.func,
  onFinalServiceSelect: PropTypes.func,
};

export default Service;
