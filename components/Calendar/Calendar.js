import PropTypes from "prop-types";
import classNames from "classnames";
import { useState, useEffect } from "react";
import { getDaysOfWeek } from "@/lib/constants";
import dateHelper, { getDateElements } from "@/lib/dateHelpers";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const navButtonStyle = "px-2 py-1";

const Calendar = ({ date, locales, sundayFirst, onDateSelect }) => {
  const [currentDate, setCurrentDate] = useState(date);
  const [calendar, setCalendar] = useState([]);

  const localDateFormatter = new Intl.DateTimeFormat(locales);

  useEffect(() => {
    const helper = dateHelper({ date, locales, sundayFirst });
    setCalendar(helper.getCalendar(currentDate));
  }, [currentDate]);

  const handleNavigationButtonClick = (direction) => {
    const { month, year } = getDateElements(currentDate);

    let newDate = null;
    if (direction === "next") {
      newDate = new Date(year, month + 1, 1);
    } else {
      newDate = new Date(year, month - 1, 1);
    }

    setCurrentDate(newDate);
  };

  const daysOfWeek = getDaysOfWeek({ locales, sundayFirst });

  return (
    <div>
      <div className="flex justify-between items-center">
        <div>{calendar.title}</div>
        <div className="flex space-x-4 items-center">
          <button
            className={navButtonStyle}
            type="button"
            aria-label="Previous"
            onClick={() => handleNavigationButtonClick("prev")}
          >
            <FaAngleLeft />
          </button>
          <button
            className={navButtonStyle}
            type="button"
            aria-label="Next"
            onClick={() => handleNavigationButtonClick("next")}
          >
            <FaAngleRight />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 items-center justify-items-center gap-2">
        {daysOfWeek.map((day) => (
          <div className="px-4 py-2 rounded-md" key={day}>
            {day}
          </div>
        ))}
        {(calendar.calendar || []).map(
          ({ dayNumber, month, year, currentMonth, isNow }) => {
            const thisDate = new Date(year, month, dayNumber);

            const dayButtonStyle = classNames(
              "w-[50px] h-[50px] rounded-full hover:bg-cyan-200",
              {
                "bg-cyan-100": isNow,
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
                  >
                    {dayNumber}
                  </button>
                )) || <span>&nbsp;</span>}
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

Calendar.defaultProps = {
  date: new Date(),
  locales: "el",
  sundayFirst: false,
  onDateSelect: () => {},
};

Calendar.propTypes = {
  date: PropTypes.instanceOf(Date),
  locales: PropTypes.string,
  sundayFirst: PropTypes.bool,
  onDateSelect: PropTypes.func,
};

export default Calendar;
