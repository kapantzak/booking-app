import PropTypes from "prop-types";
import dynamic from "next/dynamic";
import { useState } from "react";
import Calendar from "@/components/Calendar";
import TimeZone from "@/components/TimeZone";
import { FaArrowLeft } from "react-icons/fa";

const DynamicTimePicker = dynamic(() => import("@/components/TimePicker"));

const DateTimePicker = ({ date, locales, sundayFirst, onDateTimeSelect }) => {
  const [calendarDate, setCalendarDate] = useState(date);
  const [state, setState] = useState({});

  const localDateFormatter = new Intl.DateTimeFormat(locales, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const dateSelectionHandler = (date) => {
    setState((currentState) => ({ ...currentState, date }));
  };

  const timeSelectionHandler = (time) => {
    const newState = { ...state, time };
    setState(newState);
    onDateTimeSelect(newState);
  };

  const backButtonClickHandler = () => {
    setCalendarDate(state.date);
    setState({});
  };

  return (
    <div>
      {(state.date && (
        <div>
          <button
            type="button"
            aria-label="Back to date selection"
            onClick={backButtonClickHandler}
          >
            <FaArrowLeft />
          </button>
          <div>{localDateFormatter.format(state.date)}</div>
          <TimeZone />
          <DynamicTimePicker onTimeSelect={timeSelectionHandler} />
        </div>
      )) || (
        <>
          <Calendar
            date={calendarDate}
            locales={locales}
            sundayFirst={sundayFirst}
            onDateSelect={dateSelectionHandler}
          />
          <TimeZone />
        </>
      )}
    </div>
  );
};

DateTimePicker.defaultProps = {
  date: new Date(),
  locales: "el",
  sundayFirst: false,
  onDateTimeSelect: () => {},
};

DateTimePicker.propTypes = {
  date: PropTypes.instanceOf(Date),
  locales: PropTypes.string,
  sundayFirst: PropTypes.bool,
  onDateTimeSelect: PropTypes.func,
};

export default DateTimePicker;
