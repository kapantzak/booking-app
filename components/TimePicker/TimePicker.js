import PropTypes from "prop-types";
import { getSlots } from "@/lib/timeHelpers";

const TimePicker = ({ slotDurationInMinutes, onTimeSelect }) => {
  const slots = getSlots(slotDurationInMinutes);

  return (
    <div className="flex flex-col space-y-3">
      {slots.map(([hours, minutes]) => {
        const time = `${hours}:${minutes < 10 ? `0${minutes}` : minutes}`;

        return (
          <button
            type="button"
            aria-label={time}
            key={`${hours}-${minutes}`}
            className="text-center py-2 md:w-1/2 lg:w-1/4 border border-solid border-cyan-600 rounded"
            onClick={() => onTimeSelect([hours, minutes])}
          >
            {time}
          </button>
        );
      })}
    </div>
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
