import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const FlowStepper = ({ steps, activeStep }) => {
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

FlowStepper.defaultProps = {
  activeStep: 0,
};

FlowStepper.propTypes = {
  steps: PropTypes.array.isRequired,
  activeStep: PropTypes.number,
};

export default FlowStepper;
