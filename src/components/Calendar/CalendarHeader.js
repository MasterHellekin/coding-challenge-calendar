import React from "react";
import { format, addMonths, subMonths } from "date-fns";

import "./Calendar.css";

const CalendarHeader = (props) => {
  const dateFormat = "MMMM yyyy";

  const nextMonthHandler = () => {
    props.setCurrentDate(addMonths(props.currentDate, 1));
  };

  const prevMonthHandler = () => {
    props.setCurrentDate(subMonths(props.currentDate, 1));
  };

  return (
    <div className="header row flex-middle">
      <div className="column col-start">
        <div className="icon" onClick={prevMonthHandler}>
          chevron_left
        </div>
      </div>
      <div className="column col-center">
        <span>{format(props.currentDate, dateFormat)}</span>
      </div>
      <div className="column col-end">
        <div className="icon" onClick={nextMonthHandler}>
          chevron_right
        </div>
      </div>
    </div>
  );
};

export default CalendarHeader;
