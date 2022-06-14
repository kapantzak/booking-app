import PropTypes from "prop-types";
import classNames from "classnames";
import { useState, useEffect } from "react";
import { getDaysOfWeek } from "@/lib/constants";
import dateHelper, { getDateElements } from "@/lib/dateHelpers";

const Calendar = ({ date, locales, sundayFirst }) => {
  const [currentDate, setCurrentDate] = useState(date);
  const [calendar, setCalendar] = useState([]);

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
      <h2>{calendar.title}</h2>
      <button type="button" onClick={() => handleNavigationButtonClick("prev")}>
        Previous
      </button>
      <button type="button" onClick={() => handleNavigationButtonClick("next")}>
        Next
      </button>
      <div className="grid grid-cols-7">
        {daysOfWeek.map((day) => (
          <div key={day}>{day}</div>
        ))}
        {(calendar.calendar || []).map(
          ({ dayNumber, month, year, currentMonth, isNow }) => {
            const dayCellStyle = classNames({
              "bg-cyan-600": isNow,
              "opacity-25": !currentMonth,
            });

            return (
              <div
                className={dayCellStyle}
                key={`${year}-${month}-${dayNumber}`}
              >
                {dayNumber}
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
};

Calendar.propTypes = {
  date: PropTypes.instanceOf(Date),
  locales: PropTypes.string,
  sundayFirst: PropTypes.bool,
};

export default Calendar;
