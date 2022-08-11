import ReactCalendar from "react-calendar";
import { useState } from "react";

import "react-calendar/dist/Calendar.css";
import style from "./Calendar.css";

const Calendar = () => {
  const [value, valueChange] = useState(new Date());
  console.log(value.toDateString());

  const jumpToToday = () => {
    valueChange(new Date());
  };

  const tileClassName = ({ date, view }) => {
    if (view === "month") {
      return;
    }
  };

  return (
    <div className="container">
      <ReactCalendar
        value={value}
        onChange={valueChange}
        view="month"
        prev2Label={null}
        next2Label={null}
        tileClassName={tileClassName}
      />
    </div>
  );
};

export default Calendar;
