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

const FlowStepperVertical = ({ steps, activeStep }) => {
  return (
    // <Box sx={{ width: "100%", my: "4rem" }}>
    //   <Stepper activeStep={activeStep} alternativeLabel>
    //     {steps.map(({ label }) => (
    //       <Step key={label}>
    //         <StepLabel>{label}</StepLabel>
    //       </Step>
    //     ))}
    //   </Stepper>
    // </Box>
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map(({ label, description }) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{description}</Typography>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
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
  steps: PropTypes.array.isRequired,
  activeStep: PropTypes.number,
};

export default FlowStepperVertical;
