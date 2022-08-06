import PropTypes from "prop-types";
import { Box, Button, Alert } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { getSlots, getTimeElements } from "@/lib/timeHelpers";

const TimePicker = ({ slotDurationInMinutes, onTimeSelect }) => {
  const { breakpoints } = useTheme();

  const dateNow = new Date();
  const { hours: hoursFrom, minutes: minutesFrom } = getTimeElements(dateNow);

  const dateUntil = new Date();
  dateUntil.setHours(18);
  dateUntil.setMinutes(0);
  const { hours: hoursTo, minutes: minutesTo } = getTimeElements(dateUntil);

  const slots = getSlots({
    slotDurationInMinutes,
    from: [hoursFrom, minutesFrom],
    to: [hoursTo, minutesTo],
  });

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        margin: "auto",
        [breakpoints.down("sm")]: {
          width: "100%",
        },
        [breakpoints.up("md")]: {
          width: "70%",
        },
        [breakpoints.up("lg")]: {
          width: "40%",
        },
      }}
    >
      {slots.length > 0 &&
        slots.map(([hours, minutes]) => {
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
      {slots.length === 0 && (
        <Alert severity="warning">
          No available slots! Please select another date.
        </Alert>
      )}
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
