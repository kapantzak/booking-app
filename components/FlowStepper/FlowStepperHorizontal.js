import PropTypes from "prop-types";
import { Box, Step, Stepper, StepLabel } from "@mui/material";
import { getStepsArray } from "./helpers";

const FlowStepperHorizontal = ({ steps, activeStep }) => {
  const stepsArray = getStepsArray(steps);

  return (
    <Box sx={{ width: "100%", my: "4rem" }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {stepsArray.map(({ label }) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

FlowStepperHorizontal.defaultProps = {
  activeStep: 0,
};

FlowStepperHorizontal.propTypes = {
  steps: PropTypes.object.isRequired,
  activeStep: PropTypes.number,
};

export default FlowStepperHorizontal;
