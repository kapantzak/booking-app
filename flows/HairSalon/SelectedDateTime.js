import { PropTypes } from "prop-types";
import { Typography } from "@mui/material";
import { getDateElements } from "@/lib/dateHelpers";

const SelectedDateTime = ({ date, time }) => {
  const { year, month, dayNumber } = getDateElements(date);
  const dateTime = new Date(year, month, dayNumber, time[0], time[1], 0);

  const localDate = Intl.DateTimeFormat("el", {
    dateStyle: "full",
    timeStyle: "long",
  }).format(dateTime);

  return <Typography>{localDate}</Typography>;
};

SelectedDateTime.defaultProps = {
  date: new Date(),
  time: [0, 0],
};

SelectedDateTime.propTypes = {
  date: PropTypes.instanceOf(Date),
  time: PropTypes.array,
};

export default SelectedDateTime;
