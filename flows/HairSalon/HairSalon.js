import PropTypes from "prop-types";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { ArrowBack, Check } from "@mui/icons-material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import elLocale from "date-fns/locale/el";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import SelectedServices from "./SelectedServices";
import SelectedDateTime from "./SelectedDateTime";
import useViewPort from "@/hooks/useViewport";

const DynamicServices = dynamic(() => import("@/components/Services"));
const DynamicTimePicker = dynamic(() => import("@/components/TimePicker"));
// const DynamicTimeZone = dynamic(() => import("@/components/TimeZone"));

/**
 * Every flow has to define it's own steps list and pass it to the
 * parent Flow component through "onPopulateStepsList" function.
 *
 * Step object shape:
 * {
 *   stateKey {String}: The state property that this step is bound to
 *   stateValueFormatter: (Function): A formatter function that accepts
 *     the respective state value and returns a readable format to render
 *     in the stepper
 *   label {String}
 *   description: {String}
 * }
 */
const STEPS = {
  1: {
    stateKey: "services",
    stateValueFormatter: (services) => {
      if (services && services.length > 0) {
        const firstService = services[0].name;
        const trailingText =
          services.length > 1 ? ` + ${services.length - 1} more` : "";

        return `${firstService}${trailingText}`;
      }

      return "Select service";
    },
    label: "Select service",
    description: "Select one or more services",
  },
  2: {
    stateKey: "date",
    stateValueFormatter: (date) => {
      if (!date) return "Select date";

      return Intl.DateTimeFormat("el").format(date);
    },
    label: "Select date",
    description: "Select the date",
  },
  3: {
    stateKey: "time",
    stateValueFormatter: (time) => {
      if (time && time.length === 2) {
        const d = new Date();
        d.setHours(time[0]);
        d.setMinutes(time[1]);

        return Intl.DateTimeFormat("el", {
          hour: "numeric",
          minute: "numeric",
        }).format(d);
      }

      return "Select time";
    },
    label: "Select time",
    description: "Select the time",
  },
  4: {
    label: "Confirm",
    description: "Confirm your selection",
  },
};

const initialState = {
  services: [],
  date: new Date(),
  time: null,
};

const HairSalon = ({
  step,
  onStateChange,
  onComplete,
  onPopulateStepsList,
}) => {
  const [state, setState] = useState(initialState);
  const { services, date, time } = state;
  const totalDurationInMinutes = services.reduce((total, service) => {
    total += service.durationInMinutes;
    return total;
  }, 0);

  const { largeViewPort } = useViewPort();

  useEffect(() => {
    onPopulateStepsList(STEPS);
  }, []);

  useEffect(() => {
    let newState = state;

    switch (step) {
      case 1:
        newState = { ...state, step, date: null, time: null };
        break;
      case 2:
        newState = { ...state, step, time: null };
        break;
    }

    setState(newState);
    onStateChange(newState);
  }, [step]);

  const handleServiceSelectionChange = (services) => {
    const newState = { ...state, services };
    setState(newState);
    onStateChange(newState);
  };

  const handleServiceSelection = (services) => {
    const newStep = state.step + 1;
    const newState = { ...state, step: newStep, services };
    setState(newState);
    onStateChange(newState);
  };

  const handleDateSelection = (date) => {
    const newStep = state.step + 1;
    const newState = { ...state, step: newStep, date };
    setState(newState);
    onStateChange(newState);
  };

  const handleTimeSelection = (time) => {
    const newStep = state.step + 1;
    const newState = { ...state, step: newStep, time };
    setState(newState);
    onStateChange(newState);
  };

  const handleBackButtonClick = () => {
    const newStep = state.step - 1;
    const newState = { ...state, step: newStep };
    setState(newState);
    onStateChange(newState);
  };

  const handleConfirmButtonClick = () => {
    onComplete(state);
  };

  return (
    <Box>
      {step > 1 && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 4,
          }}
        >
          <Button
            variant="outlined"
            startIcon={<ArrowBack />}
            onClick={handleBackButtonClick}
          >
            Back
          </Button>
        </Box>
      )}
      <Typography
        variant={largeViewPort ? "h4" : "h5"}
        textAlign={largeViewPort ? "left" : "center"}
      >
        {STEPS[step].label}
      </Typography>
      <Typography
        variant="subtitle1"
        textAlign={largeViewPort ? "left" : "center"}
      >
        {STEPS[step].description}
      </Typography>
      <Box
        sx={{
          marginTop: 2,
        }}
      >
        {step === 1 && (
          <DynamicServices
            initialServices={services}
            onServiceSelectionChange={handleServiceSelectionChange}
            onFinalServiceSelect={handleServiceSelection}
          />
        )}
        {step === 2 && (
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
            {/* <DynamicTimeZone /> */}
          </>
        )}
        {step === 3 && (
          <>
            {/* <DynamicTimeZone /> */}
            <DynamicTimePicker
              slotDurationInMinutes={totalDurationInMinutes}
              onTimeSelect={handleTimeSelection}
            />
          </>
        )}
        {step === 4 && (
          <>
            <Box sx={{ marginBottom: 4 }}>
              <Typography gutterBottom variant="h5" component="div">
                Confirm your selection
              </Typography>
              <SelectedServices services={services} />
              <SelectedDateTime date={date} time={time} />
            </Box>
            <Button
              variant="contained"
              startIcon={<Check />}
              onClick={handleConfirmButtonClick}
            >
              Confirm
            </Button>
          </>
        )}
      </Box>
    </Box>
  );
};

HairSalon.defaultProps = {
  step: 1,
  onStateChange: () => {},
  onComplete: () => {},
  onPopulateStepsList: () => {},
};

HairSalon.propTypes = {
  step: PropTypes.number,
  onStateChange: PropTypes.func,
  onComplete: PropTypes.func,
  onPopulateStepsList: PropTypes.func,
};

export default HairSalon;
