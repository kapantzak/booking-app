import PropTypes from "prop-types";
import dynamic from "next/dynamic";
import { useState } from "react";

const DynamicServices = dynamic(() => import("@/components/Services"));
const DynamicDateTimePicker = dynamic(() =>
  import("@/components/DateTimePicker")
);

const HairSalon = ({ onStepChange, onComplete }) => {
  const [step, setStep] = useState(1);
  const [service, setService] = useState(null);
  const [dateTime, setDateTime] = useState(null);

  const handleServiceSelection = (serviceId) => {
    setService(serviceId);
    setStep(2);
    onStepChange({
      step,
      state: {
        service,
        dateTime,
      },
    });
  };

  const handleDateTimeSelection = (dateTime) => {
    setDateTime(dateTime);
    onComplete({
      service,
      dateTime,
    });
  };

  switch (step) {
    case 1:
      return <DynamicServices onServiceSelect={handleServiceSelection} />;
    case 2:
      return (
        <DynamicDateTimePicker onDateTimeSelect={handleDateTimeSelection} />
      );
    default:
      return <div>Not found</div>;
  }
};

HairSalon.defaultProps = {
  onStepChange: () => {},
  onComplete: () => {},
};

HairSalon.propTypes = {
  onStepChange: PropTypes.func,
  onComplete: PropTypes.func,
};

export default HairSalon;
