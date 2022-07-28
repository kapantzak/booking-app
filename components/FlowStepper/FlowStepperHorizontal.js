import PropTypes from "prop-types";
import { Box, Step, Stepper, StepLabel } from "@mui/material";

const FlowStepperHorizontal = ({ steps, activeStep }) => {
  return (
    <Box sx={{ width: "100%", my: "4rem" }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map(({ label }) => (
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
  steps: PropTypes.array.isRequired,
  activeStep: PropTypes.number,
};

export default FlowStepperHorizontal;
