import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import FlowStepper from "@/components/FlowStepper";
import HairSalon from "./HairSalon";

const Flow = () => {
  const [step, setStep] = useState(1);
  const [state, setState] = useState({});

  const handleStepChange = ({ step, state }) => {
    setStep(step);
    setState(state);
  };

  const handleBackButton = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleComplete = (state) => {
    setState(state);
    alert("Done!");
  };

  return (
    <div>
      <FlowStepper
        steps={[
          { index: 1, label: "Select service" },
          { index: 2, label: "Select date" },
          { index: 3, label: "Select time" },
          { index: 4, label: "Confirm" },
        ]}
        activeStep={step - 1}
      />
      {step > 1 && (
        <button type="button" aria-label="Back" onClick={handleBackButton}>
          <FaArrowLeft />
        </button>
      )}
      <HairSalon
        step={step}
        onStepChange={handleStepChange}
        onComplete={handleComplete}
      />
    </div>
  );
};

export default Flow;
