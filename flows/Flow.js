import { useState } from "react";
import { Grid } from "@mui/material";
import {
  FlowStepperVertical,
  FlowStepperHorizontal,
} from "@/components/FlowStepper";
import HairSalon from "@/flows/HairSalon";
import useMediaQuery from "@mui/material/useMediaQuery";

const Flow = () => {
  const [steps, setSteps] = useState([]);
  const [step, setStep] = useState(1);
  const [state, setState] = useState({});
  const largeViewPort = useMediaQuery("(min-width:900px)");

  const handleStepsListPopulation = (stepsList) => {
    setSteps(stepsList);
  };

  const handleStepChange = ({ step, state }) => {
    setStep(step);
    setState(state);
  };

  const handleComplete = (state) => {
    setState(state);
    alert("Done!");
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={3}>
        {(largeViewPort && (
          <FlowStepperVertical steps={steps} activeStep={step - 1} />
        )) || <FlowStepperHorizontal steps={steps} activeStep={step - 1} />}
      </Grid>
      <Grid item xs={12} md={9}>
        <HairSalon
          step={step}
          onStepChange={handleStepChange}
          onComplete={handleComplete}
          onPopulateStepsList={handleStepsListPopulation}
        />
      </Grid>
    </Grid>
  );
};

export default Flow;
