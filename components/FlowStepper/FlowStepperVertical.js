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

const FlowStepperVertical = ({ steps, activeStep }) => {
  const stepsArray = getStepsArray(steps);

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {stepsArray.map(({ label, description }) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{description}</Typography>
            </StepContent>
          </Step>
        ))}
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
  activeStep: 0,
};

FlowStepperVertical.propTypes = {
  steps: PropTypes.object.isRequired,
  activeStep: PropTypes.number,
};

export default FlowStepperVertical;
