import { getDateElements } from "@/lib/dateHelpers";

const getSlots = (slotDurationInMinutes) => {
  const slots = [];

  let date = new Date(2022, 0, 1, 0, 0, 0);
  const { dayNumber } = getDateElements(date);

  while (getDateElements(date).dayNumber === dayNumber) {
    const { hours, minutes } = getTimeElements(date);
    slots.push([hours, minutes]);
    date = new Date(2022, 0, 1, hours, minutes + slotDurationInMinutes, 0);
  }

  return slots;
};

const getTimeElements = (date) => ({
  hours: date.getHours(),
  minutes: date.getMinutes(),
  seconds: date.getSeconds(),
  timezoneOffset: date.getTimezoneOffset(),
});

export { getSlots, getTimeElements };
