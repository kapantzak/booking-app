const dateHelper = ({ date, locales, sundayFirst }) => {
  if (!date) {
    throw new Error("No date provided");
  }

  if (typeof date.getDate !== "function") {
    throw new Error("Please provide a valid date object");
  }

  const getTitle = (newDate) => {
    const formatter = new Intl.DateTimeFormat(locales, {
      month: "long",
      year: "numeric",
    });

    return formatter.format(newDate);
  };

  return {
    getCalendar: (newDate) => {
      const thisDate = newDate || date;
      const { year, month } = getDateElements(thisDate);

      const firstDayOfMonth = new Date(year, month, 1);
      const getLastDayOfMonth = new Date(year, month + 1, 0);

      const { dayOfWeek: dayOfWeekFirstDay } = getDateElements(firstDayOfMonth);
      const { dayNumber: dayNumberLastDay, dayOfWeek: dayOfWeekLastDay } =
        getDateElements(getLastDayOfMonth);

      const calendar = [];

      const placeholdersBefore = getPlaceholdersBefore(
        dayOfWeekFirstDay,
        sundayFirst
      );

      [...Array(placeholdersBefore).keys()].reverse().forEach((d) => {
        calendar.push(getDateElements(new Date(year, month, -d)));
      });

      for (let d = 1; d <= dayNumberLastDay; d++) {
        const dateElements = getDateElements(new Date(year, month, d));
        calendar.push({ ...dateElements, currentMonth: true });
      }

      const placeholdersAfter = getPlaceholdersAfter(
        dayOfWeekLastDay,
        sundayFirst
      );

      [...Array(placeholdersAfter).keys()].forEach((d) => {
        calendar.push(getDateElements(new Date(year, month + 1, d + 1)));
      });

      const title = getTitle(thisDate);

      return {
        title,
        calendar,
      };
    },
  };
};

const getPlaceholdersBefore = (dayOfWeekFirstDay, sundayFirst) => {
  let placeholdersBefore = 0;

  if (sundayFirst) {
    placeholdersBefore = dayOfWeekFirstDay;
  } else if (dayOfWeekFirstDay === 0) {
    placeholdersBefore = 6;
  } else {
    placeholdersBefore = dayOfWeekFirstDay - 1;
  }

  return placeholdersBefore;
};

const getPlaceholdersAfter = (dayOfWeekLastDay, sundayFirst) =>
  sundayFirst
    ? 6 - dayOfWeekLastDay
    : dayOfWeekLastDay > 0
    ? 7 - dayOfWeekLastDay
    : 0;

const getDateElements = (date) => {
  const now = new Date();

  const elements = {
    dayNumber: date.getDate(),
    dayOfWeek: date.getDay(),
    month: date.getMonth(),
    year: date.getFullYear(),
  };

  const isNow =
    now.getDate() === elements.dayNumber &&
    now.getMonth() === elements.month &&
    now.getFullYear() === elements.year;

  return { ...elements, isNow };
};

export default dateHelper;

export { getDateElements };
