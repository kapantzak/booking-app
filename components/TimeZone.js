import { Public } from "@mui/icons-material";

const TimeZone = () => {
  const { timeZone } = Intl.DateTimeFormat().resolvedOptions();
  const time = Intl.DateTimeFormat("el", {
    hour: "numeric",
    minute: "numeric",
    timeZone,
  }).format(new Date());

  return (
    <div className="flex space-x-2 items-center">
      <Public />
      <div>
        {timeZone} ({time})
      </div>
    </div>
  );
};

export default TimeZone;
