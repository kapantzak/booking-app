import PropTypes from "prop-types";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import useViewPort from "@/hooks/useViewport";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

const Service = ({
  service,
  initiallySelected,
  onServiceSelect,
  onServiceDeselect,
  onFinalServiceSelect,
}) => {
  const { breakpoints } = useTheme();
  const { largeViewPort } = useViewPort();
  const { name, description, imagePath, durationInMinutes } = service;
  const [isSelected, setIsSelected] = useState(initiallySelected);

  const serviceSelectionHandler = () => {
    if (isSelected) {
      onServiceDeselect(service);
    } else {
      onServiceSelect(service);
    }

    setIsSelected(!isSelected);
  };

  return (
    <Card
      raised={isSelected}
      sx={{
        width: "100%",
        marginY: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        [breakpoints.up("md")]: {
          width: "46%",
          marginX: "2%",
          marginY: "2%",
        },
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
          <Typography
            gutterBottom
            variant={largeViewPort ? "h5" : "h6"}
            component="div"
          >
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
  initiallySelected: false,
  onServiceSelect: () => {},
  onServiceDeselect: () => {},
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
  initiallySelected: PropTypes.bool,
  onServiceSelect: PropTypes.func,
  onServiceDeselect: PropTypes.func,
  onFinalServiceSelect: PropTypes.func,
};

export default Service;
