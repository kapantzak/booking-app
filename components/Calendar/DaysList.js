import PropTypes from "prop-types";
import classNames from "classnames";
import { datesEqual } from "@/lib/dateHelpers";

const DaysList = ({ locales, calendar, selectedDate, onDateSelect }) => {
  const localDateFormatter = new Intl.DateTimeFormat(locales);

  return (
    <>
      {calendar.map(
        ({ dayNumber, month, year, currentMonth, isNow, inPast }) => {
          const thisDate = new Date(year, month, dayNumber);

          const dayButtonStyle = classNames(
            "w-[50px] h-[50px] rounded-full hover:bg-cyan-200",
            {
              "bg-cyan-100": isNow,
              "bg-cyan-500": datesEqual(selectedDate, thisDate),
              "opacity-25": inPast,
              "hover:bg-inherit": inPast,
              "focus:bg-inherit": inPast,
              "active:bg-inherit": inPast,
            }
          );

          return (
            <div key={`${year}-${month}-${dayNumber}`}>
              {(currentMonth && (
                <button
                  className={dayButtonStyle}
                  type="button"
                  aria-label={localDateFormatter.format(thisDate)}
                  onClick={() => onDateSelect(thisDate)}
                  disabled={inPast}
                >
                  {dayNumber}
                </button>
              )) || <span>&nbsp;</span>}
            </div>
          );
        }
      )}
    </>
  );
};

DaysList.defaultProps = {
  locales: "el",
  calendar: [],
  selectedDate: null,
  onDateSelect: () => {},
};

DaysList.propTypes = {
  locales: PropTypes.string,
  calendar: PropTypes.array,
  selectedDate: PropTypes.instanceOf(Date),
  onDateSelect: PropTypes.func,
};

export default DaysList;
