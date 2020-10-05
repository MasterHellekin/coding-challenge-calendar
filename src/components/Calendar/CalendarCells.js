import React from "react";
import {
  format,
  startOfWeek,
  addDays,
  endOfWeek,
  isSameMonth,
  isSameDay,
  startOfMonth,
  endOfMonth,
} from "date-fns";

import "./Calendar.css";

const CalendarCells = (props) => {
  const monthStart = startOfMonth(props.currentDate);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);
  const dateFormat = "d";
  const rows = [];
  let days = [];
  let day = startDate;
  let formattedDate = "";

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = format(day, dateFormat);
      const cloneDay = day.toLocaleString();
      days.push(
        <div
          className={`column cell ${
            !isSameMonth(day, monthStart)
              ? "disabled"
              : isSameDay(day, props.selectedDate)
              ? "selected"
              : ""
          }`}
          key={day}
          onClick={() => props.showModal(cloneDay)}
        >
          <span className="number">{formattedDate}</span>
          <span className="bg">{formattedDate}</span>
        </div>
      );
      day = addDays(day, 1);
    }
    rows.push(
      <div className="row" key={day}>
        {" "}
        {days}{" "}
      </div>
    );
    days = [];
  }

  return <div className="body">{rows}</div>;
};

export default CalendarCells;
