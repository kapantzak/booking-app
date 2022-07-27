import PropTypes from "prop-types";
import { Box, Button } from "@mui/material";
import { getSlots } from "@/lib/timeHelpers";

const TimePicker = ({ slotDurationInMinutes, onTimeSelect }) => {
  const slots = getSlots(slotDurationInMinutes);

  return (
    <Box
      sx={(theme) => ({
        display: "flex",
        flexDirection: "column",
        margin: "auto",
        [theme.breakpoints.down("sm")]: {
          width: "100%",
        },
        [theme.breakpoints.up("md")]: {
          width: "70%",
        },
        [theme.breakpoints.up("lg")]: {
          width: "40%",
        },
      })}
    >
      {slots.map(([hours, minutes]) => {
        const time = `${hours}:${minutes < 10 ? `0${minutes}` : minutes}`;

        return (
          <Button
            sx={{ m: 1 }}
            key={`${hours}-${minutes}`}
            variant="outlined"
            onClick={() => onTimeSelect([hours, minutes])}
          >
            {time}
          </Button>
        );
      })}
    </Box>
  );
};

TimePicker.defaultProps = {
  slotDurationInMinutes: 30,
  onTimeSelect: () => {},
};

TimePicker.propTypes = {
  slotDurationInMinutes: PropTypes.number,
  onTimeSelect: PropTypes.func,
};

export default TimePicker;
