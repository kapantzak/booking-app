import PropTypes from "prop-types";
import Calendar from "@/components/Calendar";

const DateTimePicker = ({ date, locales, sundayFirst }) => {
  return (
    <div>
      <Calendar date={date} locales={locales} sundayFirst={sundayFirst} />
    </div>
  );
};

DateTimePicker.defaultProps = {
  date: new Date(),
  locales: "el",
  sundayFirst: false,
};

DateTimePicker.propTypes = {
  date: PropTypes.instanceOf(Date),
  locales: PropTypes.string,
  sundayFirst: PropTypes.bool,
};

export default DateTimePicker;
