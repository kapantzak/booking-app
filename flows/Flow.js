import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
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
      <p>
        Step: {step} / State: {JSON.stringify(state)}
      </p>
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
