import React, { useState, Fragment } from "react";

import CalendarHeader from "./CalendarHeader";
import CalendarDays from "./CalendarDays";
import CalendarCells from "./CalendarCells";

import DatePicker from "../DatePicker/DatePicker";

import ReminderList from "../Reminder/ReminderList";

import "./Calendar.css";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [show, setShow] = useState(false);
  // const [showEdit, setShowEdit] = useState(false);
  const [currentDay, setCurrentDay] = useState("");
  // const [reminder, setReminder] = useState([]);
  // const [enteredActivity, setEnteredActivity] = useState("");

  const showModal = (day) => {
    setShow(!show);
    console.log(day);
    setCurrentDay(day);
  };

  return (
    <Fragment>
      <div className="calendar">
        <CalendarHeader
          currentDate={currentDate}
          setCurrentDate={setCurrentDate}
        />
        <CalendarDays currentDate={currentDate} />
        <CalendarCells
          currentDate={currentDate}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          showModal={showModal}
        />
      </div>
      <DatePicker show={show} onClose={showModal}>
        <ReminderList currentDay={currentDay} />
      </DatePicker>
    </Fragment>
  );
};
export default Calendar;
