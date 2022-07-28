import PropTypes from "prop-types";
import { Fragment } from "react";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import { ArrowBack, Check } from "@mui/icons-material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import elLocale from "date-fns/locale/el";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { getDateElements } from "@/lib/dateHelpers";

const DynamicServices = dynamic(() => import("@/components/Services"));
const DynamicTimePicker = dynamic(() => import("@/components/TimePicker"));
const DynamicTimeZone = dynamic(() => import("@/components/TimeZone"));

/**
 * Every flow has to define it's own steps list and pass it to the
 * parent Flow component through "onPopulateStepsList" function.
 */
const STEPS = {
  1: {
    label: "Select service",
    description: "Select one or more services",
  },
  2: {
    label: "Select date",
    description: "Select the date",
  },
  3: {
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

const SelectedServices = ({ services }) => {
  if (!services) return null;

  const totalDuration = services.reduce((total, { durationInMinutes }) => {
    total += durationInMinutes;

    return total;
  }, 0);

  return (
    <>
      <Typography>You have selected {services.length} services:</Typography>
      <List>
        {services.map(({ name, durationInMinutes }, index) => (
          <Fragment key={name}>
            <ListItem>
              <ListItemText
                primary={name}
                secondary={`Duration: ${durationInMinutes} min`}
              />
            </ListItem>
            {index < services.length - 1 && <Divider light />}
          </Fragment>
        ))}
      </List>
      {services.length > 1 && (
        <Typography>with total duration of {totalDuration} minutes</Typography>
      )}
    </>
  );
};

const SelectedDateTime = ({ date, time }) => {
  const { year, month, dayNumber } = getDateElements(date);
  const dateTime = new Date(year, month, dayNumber, time[0], time[1], 0);

  const localDate = Intl.DateTimeFormat("el", {
    dateStyle: "full",
    timeStyle: "long",
  }).format(dateTime);

  return <Typography>{localDate}</Typography>;
};

const HairSalon = ({ step, onStepChange, onComplete, onPopulateStepsList }) => {
  const [state, setState] = useState(initialState);
  const { services, date, time } = state;
  const totalDurationInMinutes = services.reduce((total, service) => {
    total += service.durationInMinutes;
    return total;
  }, 0);

  useEffect(() => {
    onPopulateStepsList(STEPS);
  }, []);

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

  const handleServiceSelection = (services) => {
    const newState = { ...state, services };
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

  const handleBackButtonClick = () => {
    onStepChange({ step: step - 1, state });
  };

  const handleConfirmButtonClick = () => {
    onComplete(state);
  };

  return (
    <>
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
      {step === 1 && (
        <DynamicServices onFinalServiceSelect={handleServiceSelection} />
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
          <DynamicTimeZone />
        </>
      )}
      {step === 3 && (
        <>
          <DynamicTimeZone />
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
    </>
  );
};

HairSalon.defaultProps = {
  step: 1,
  onStepChange: () => {},
  onComplete: () => {},
  onPopulateStepsList: () => {},
};

HairSalon.propTypes = {
  step: PropTypes.number,
  onStepChange: PropTypes.func,
  onComplete: PropTypes.func,
  onPopulateStepsList: PropTypes.func,
};

export default HairSalon;
