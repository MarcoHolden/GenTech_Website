import React, { useState } from "react";
import "./Calendar.css"
import nextIcon from "../../../assets/next-icon.svg";

export const Calendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const currentMonth = currentDate.getMonth();

    // Functions to the first and last date of the month
    const firstDateOfMonth = (date) => new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDateOfMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0); 

    // Range function to give us array of size between start and end index. First creates empty values with the given offset count
    const range = (start, end, offset) => {
        let output = [];
        for (let i = 0; i < offset; i++) output.push("-");
        for (let i = start; i < end; i++) output.push(i);
        return output;
    }

    // Current month showing on calendar
    const currentMonthDays = lastDateOfMonth(currentDate).getDate();
    const currentMonthFirstDay = firstDateOfMonth(currentDate).getDay();

    const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
    const months = ["January","February","March","April","May","June","July", "August","September","October","November","December"];

    // Go to next month if argument is 1. Go to prev month if argument is -1
    const handleMonthChange = (value) => {
      setCurrentDate(new Date(currentDate.setMonth(currentMonth + value)));
    }

    return <div className="event-calendar">
        <div className="event-calendar-header">
          <div className="current-month-text">{months[currentMonth]}, {currentDate.getFullYear()}</div>
          <img onClick={() => handleMonthChange(-1)} className="calendar-button prev" src={nextIcon} />
          <img onClick={() => handleMonthChange(1)} className="calendar-button next" src={nextIcon} />
        </div>

        <div className="event-calendar-body">
          {days.map((day) => <div className="calendar-date">{day}</div>)}
          {range(1, currentMonthDays + 1, currentMonthFirstDay).map((value, index) => {
            return <div className={value === 5 ? "event": null}>{value}</div>
            })}
        </div>
    </div>
}