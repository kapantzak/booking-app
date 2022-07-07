import PropTypes from "prop-types";
import classNames from "classnames";
import { useState, useEffect } from "react";
import { getDaysOfWeek } from "@/lib/constants";
import dateHelper, { getDateElements } from "@/lib/dateHelpers";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import DaysList from "./DaysList";

const Calendar = ({ date, locales, sundayFirst, onDateSelect }) => {
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

  const prevButtonDisabled = calendar.inCurrentMonth;
  const prevNavButtonStyle = classNames("px-2 py-1", {
    "opacity-25": prevButtonDisabled,
  });

  return (
    <div>
      <div className="flex justify-between items-center">
        <div>{calendar.title}</div>
        <div className="flex space-x-4 items-center">
          <button
            className={prevNavButtonStyle}
            type="button"
            aria-label="Previous"
            onClick={() => handleNavigationButtonClick("prev")}
            disabled={prevButtonDisabled}
          >
            <FaAngleLeft />
          </button>
          <button
            className="px-2 py-1"
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
        <DaysList
          locales={locales}
          calendar={calendar.calendar}
          selectedDate={date}
          onDateSelect={onDateSelect}
        />
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
