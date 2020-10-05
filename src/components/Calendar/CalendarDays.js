import React from "react";
import { format, addDays, startOfWeek } from "date-fns";

import "./Calendar.css";

const CalendarDays = (props) => {
  const dateFormat = "ddd";
  const days = [];
  let startDate = startOfWeek(props.currentDate);

  for (let i = 0; i < 7; i++) {
    days.push(
      <div className="column col-center" key={i}>
        {format(addDays(startDate, i), dateFormat)}
      </div>
    );
  }

  return <div className="days row">{days}</div>;
};

export default CalendarDays;
