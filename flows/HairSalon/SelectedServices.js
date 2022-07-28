import { PropTypes } from "prop-types";
import { Fragment } from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";

const SelectedServices = ({ services }) => {
  if (!services) return null;

  const totalDuration = services.reduce((total, { durationInMinutes }) => {
    total += durationInMinutes;

    return total;
  }, 0);

  return (
    <>
      <Typography>You have selected {services.length} services:</Typography>
      <List>
        {services.map(({ name, durationInMinutes }, index) => (
          <Fragment key={name}>
            <ListItem>
              <ListItemText
                primary={name}
                secondary={`Duration: ${durationInMinutes} min`}
              />
            </ListItem>
            {index < services.length - 1 && <Divider light />}
          </Fragment>
        ))}
      </List>
      {services.length > 1 && (
        <Typography>with total duration of {totalDuration} minutes</Typography>
      )}
    </>
  );
};

SelectedServices.defaultProps = {
  services: [],
};

SelectedServices.propTypes = {
  services: PropTypes.array,
};

export default SelectedServices;
