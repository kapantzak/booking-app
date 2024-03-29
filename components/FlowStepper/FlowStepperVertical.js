import PropTypes from "prop-types";
import {
  Box,
  Step,
  Stepper,
  StepContent,
  StepLabel,
  Paper,
  Typography,
  Button,
} from "@mui/material";
import { getStepsArray } from "./helpers";

const FlowStepperVertical = ({ steps, state, showStepDescription }) => {
  const stepsArray = getStepsArray(steps);
  const activeStep = (state.step || 1) - 1;

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {stepsArray.map(
          ({ stateKey, stateValueFormatter, label, description }) => (
            <Step key={label}>
              <StepLabel>
                {(stateValueFormatter &&
                  stateValueFormatter(state[stateKey])) ||
                  label}
              </StepLabel>
              {showStepDescription && (
                <StepContent>
                  <Typography>{description}</Typography>
                </StepContent>
              )}
            </Step>
          )
        )}
      </Stepper>
      {activeStep === stepsArray.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={() => {}} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
};

FlowStepperVertical.defaultProps = {
  state: {},
  showStepDescription: false,
};

FlowStepperVertical.propTypes = {
  steps: PropTypes.object.isRequired,
  state: PropTypes.object,
  showStepDescription: PropTypes.bool,
};

export default FlowStepperVertical;
