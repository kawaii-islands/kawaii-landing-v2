import React, { useEffect, useState } from "react";
import cn from "classnames/bind";
import styles from "./Calendar.module.scss";
import axios from "axios";
import FullCalendar from "@fullcalendar/react";
// import '@fullcalendar/main.css';
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";

const cx = cn.bind(styles);

const Calendar: React.FC<{}> = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    callData();
  }, []);
  const callData = async () => {
    try {
      const res = await axios.get(
        "https://www.googleapis.com/calendar/v3/calendars/c_rn6knvdahh20skfq31ku1ih4ic@group.calendar.google.com/events?key=AIzaSyD4XKcoDvO7-0YRy53NWRd71HJXtMDR9YA"
      );
      if (res.status === 200 || res.status === 201) {
        const items = res.data.items;
        items.forEach((i: any) => {
          i.title = i.summary;
          i.start = i.start.date || i.start.dateTime;
          i.end = i.end.date;
          i.url = i.htmlLink;
          if (i.start.split("T").length === 2) {
            i.start = i.start.split("T")[0];
          }
          return i;
        });
        setData(items);
      } else {
        console.log("Error");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={cx("container")}>
      <div className={cx("title")}>Kawaii Islands Calendar</div>
      <div className={cx("calendar")}>
        <FullCalendar
          initialView="dayGridMonth"
          plugins={[dayGridPlugin, timeGridPlugin]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          events={data}
          dayMaxEventRows={true}
          contentHeight="auto"
        />
      </div>
    </div>
  );
};

export default Calendar;
