import { useState } from "react";
import { Grid } from "@mui/material";
import {
  FlowStepperVertical,
  FlowStepperHorizontal,
} from "@/components/FlowStepper";
import HairSalon from "@/flows/HairSalon";
import useMediaQuery from "@mui/material/useMediaQuery";

const Flow = () => {
  const [steps, setSteps] = useState({});
  const [state, setState] = useState({ step: 1 });
  const { step } = state;

  const largeViewPort = useMediaQuery("(min-width:900px)");

  const handleStepsListPopulation = (stepsList) => {
    setSteps(stepsList);
  };

  const handleStateChange = (newState) => {
    setState(newState);
  };

  const handleComplete = (state) => {
    setState(state);
    alert("Done!");
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={3}>
        {(largeViewPort && (
          <FlowStepperVertical steps={steps} state={state} />
        )) || <FlowStepperHorizontal steps={steps} activeStep={step - 1} />}
      </Grid>
      <Grid item xs={12} md={9}>
        <HairSalon
          step={step}
          onStateChange={handleStateChange}
          onComplete={handleComplete}
          onPopulateStepsList={handleStepsListPopulation}
        />
      </Grid>
    </Grid>
  );
};

export default Flow;
