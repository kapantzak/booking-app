import PropTypes from "prop-types";
import dynamic from "next/dynamic";
import { useState } from "react";
import Calendar from "@/components/Calendar";
import { FaGlobeAmericas } from "react-icons/fa";

const DynamicTimePicker = dynamic(() => import("@/components/TimePicker"));

const DateTimePicker = ({ date, locales, sundayFirst }) => {
  const [state, setState] = useState({});

  const { timeZone } = Intl.DateTimeFormat().resolvedOptions();
  const time = Intl.DateTimeFormat("el", {
    hour: "numeric",
    minute: "numeric",
    timeZone,
  }).format(new Date());

  const dateSelectionHandler = (date) => {
    setState((currentState) => ({ ...currentState, date }));
  };

  const timeSelectionHandler = (time) => {
    setState((currentState) => ({ ...currentState, time }));
  };

  return (
    <div>
      <Calendar
        date={date}
        locales={locales}
        sundayFirst={sundayFirst}
        onDateSelect={dateSelectionHandler}
      />
      {state.date && <DynamicTimePicker onTimeSelect={timeSelectionHandler} />}
      <div className="flex space-x-2 items-center">
        <FaGlobeAmericas />
        <div>
          {timeZone} ({time})
        </div>
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
