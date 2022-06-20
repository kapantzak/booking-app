export const NODE_ENV = process.env.NODE_ENV || "development";
export const PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;
export const NEXT_PRIVATE_API_URL = process.env.NEXT_PRIVATE_API_URL;
export const GOOGLE_CLIENT_ID =
  "861753474191-4c59uvcqp00irkjpti5nuvk2ja4bkei5.apps.googleusercontent.com";

const daysIndex = {
  Sun: new Date(2022, 5, 5),
  Mon: new Date(2022, 5, 6),
  Tue: new Date(2022, 5, 7),
  Wen: new Date(2022, 5, 8),
  Thu: new Date(2022, 5, 9),
  Fri: new Date(2022, 5, 10),
  Sat: new Date(2022, 5, 11),
};

const getDaysKeys = (sundayFirst) =>
  sundayFirst
    ? ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "Sat"]
    : ["Mon", "Tue", "Wen", "Thu", "Fri", "Sat", "Sun"];

/**
 * Get a locxalized array of the days of a week
 *
 * @param {String} options.locales A string with a BCP 47 language tag [https://en.wikipedia.org/wiki/IETF_language_tag]
 * @param {String} options.weekday The representation of the weekday ("long"/"short"/"narrow")
 *  [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat]
 * @param {Boolean} options.sundayFirst Indicate wheather you want to return Sunday as the first day of the week or not
 * @returns {Array}
 */
const getDaysOfWeek = ({ locales, sundayFirst, weekday } = {}) => {
  weekday = weekday || "short";

  const daysArr = getDaysKeys(sundayFirst);
  const dateTimeFormatter = new Intl.DateTimeFormat(locales, { weekday });

  return daysArr.map((dayKey) => dateTimeFormatter.format(daysIndex[dayKey]));
};

export { getDaysOfWeek };
