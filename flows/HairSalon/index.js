import PropTypes from "prop-types";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import elLocale from "date-fns/locale/el";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";

const DynamicServices = dynamic(() => import("@/components/Services"));
const DynamicTimePicker = dynamic(() => import("@/components/TimePicker"));
const DynamicTimeZone = dynamic(() => import("@/components/TimeZone"));

const initialState = {
  service: null,
  date: new Date(),
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
      step: step + 1,
      state: newState,
    });
  };

  const handleConfirmation = () => {
    onComplete(state);
  };

  switch (step) {
    case 1:
      return <DynamicServices onServiceSelect={handleServiceSelection} />;
    case 2:
      return (
        <>
          <LocalizationProvider
            dateAdapter={AdapterDateFns}
            adapterLocale={elLocale}
          >
            <StaticDatePicker
              displayStaticWrapperAs="desktop"
              openTo="day"
              disablePast={true}
              value={state.date}
              onChange={(newValue) => {
                handleDateSelection(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
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
    case 4:
      return (
        <>
          <div>Comfirm state: {JSON.stringify(state)}</div>
          <button type="button" onClick={handleConfirmation}>
            Confirm
          </button>
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
