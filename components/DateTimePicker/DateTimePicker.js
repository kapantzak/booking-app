import PropTypes from "prop-types";
import Calendar from "@/components/Calendar";

const DateTimePicker = ({ date, locales, sundayFirst }) => {
  const { timeZone } = Intl.DateTimeFormat().resolvedOptions();
  const time = Intl.DateTimeFormat("el", {
    hour: "numeric",
    minute: "numeric",
    timeZone,
  }).format(new Date());

  return (
    <div>
      <Calendar date={date} locales={locales} sundayFirst={sundayFirst} />
      <div>
        Time zone: {timeZone} ({time})
      </div>
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
