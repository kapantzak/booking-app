import { getDateElements } from "@/lib/dateHelpers";

const getSlots = ({ slotDurationInMinutes, from = [0, 0], to = [23, 59] }) => {
  const slots = [];

  let date = new Date(2022, 0, 1, from[0], from[1] % 60);
  const { dayNumber } = getDateElements(date);

  const until = new Date(2022, 0, 1, to[0], to[1] % 60);

  if (date >= until) return [];

  while (
    getDateElements(date).dayNumber === dayNumber &&
    date.getTime() <= until.getTime() - 1000 * 60 * (slotDurationInMinutes - 1)
  ) {
    const { hours, minutes } = getTimeElements(date);
    slots.push([hours, minutes]);
    date = new Date(2022, 0, 1, hours, minutes + slotDurationInMinutes);
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
