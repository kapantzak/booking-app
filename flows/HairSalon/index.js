import PropTypes from "prop-types";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

const DynamicServices = dynamic(() => import("@/components/Services"));
const DynamicCalendar = dynamic(() => import("@/components/Calendar"));
const DynamicTimePicker = dynamic(() => import("@/components/TimePicker"));
const DynamicTimeZone = dynamic(() => import("@/components/TimeZone"));

const initialState = {
  service: null,
  date: null,
  time: null,
};

const HairSalon = ({ step, onStepChange, onComplete }) => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    let newState = state;

    switch (step) {
      case 1:
        newState = { ...state, date: null, time: null };
        break;
      case 2:
        newState = { ...state, time: null };
        break;
    }

    setState(newState);
    onStepChange({ step, state: newState });
  }, [step]);

  const handleServiceSelection = (service) => {
    const newState = { ...state, service };
    setState(newState);
    onStepChange({
      step: step + 1,
      state: newState,
    });
  };

  const handleDateSelection = (date) => {
    const newState = { ...state, date };
    setState(newState);
    onStepChange({
      step: step + 1,
      state: newState,
    });
  };

  const handleTimeSelection = (time) => {
    const newState = { ...state, time };
    setState(newState);
    onStepChange({
      step,
      state: newState,
    });
    onComplete(newState);
  };

  switch (step) {
    case 1:
      return <DynamicServices onServiceSelect={handleServiceSelection} />;
    case 2:
      return (
        <>
          <DynamicCalendar
            date={state.date || new Date()}
            onDateSelect={handleDateSelection}
          />
          <DynamicTimeZone />
        </>
      );
    case 3:
      return (
        <>
          <DynamicTimeZone />
          <DynamicTimePicker onTimeSelect={handleTimeSelection} />
        </>
      );
    default:
      return <div>Not found</div>;
  }
};

HairSalon.defaultProps = {
  step: 1,
  onStepChange: () => {},
  onComplete: () => {},
};

HairSalon.propTypes = {
  step: PropTypes.number,
  onStepChange: PropTypes.func,
  onComplete: PropTypes.func,
};

export default HairSalon;
