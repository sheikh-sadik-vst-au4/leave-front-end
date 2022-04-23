import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

const localizer = momentLocalizer(moment);

export const MyCalendar = ({ holidays, leaves }) => {
  let events = [];

  holidays.map((holiday) => {
    let newEvent = {
      title: holiday.occasion,
      start: Date.parse(holiday.date),
      end: Date.parse(holiday.date),
      allDay: true,
      color: "#1a237e",
    };
    return events.push(newEvent);
  });

  leaves.map((leave) => {
    if (leave.toDate) {
      let newEvent = {
        title: leave.leaveType.name,
        start: Date.parse(leave.fromDate),
        end: Date.parse(leave.toDate),
        allDay: true,
        color: "#ffc107",
        //red "#d50000",
        //green  "#1b5e20",
        // yellow "#ffc107",
      };
      return events.push(newEvent);
    } else {
      let newEvent = {
        title: leave.leaveType.name,
        start: Date.parse(leave.fromDate),
        end: Date.parse(leave.fromDate),
        allDay: true,
        color: "#ffc107",
        //red "#d50000",
        //green  "#1b5e20",
        // yellow "#ffc107",
      };
      return events.push(newEvent);
    }
  });

  return (
    <div>
         <div style={{ display: "flex" }}>
          <span style={{ padding:"5px", display:'flex'  }}>Holiday :-   <div style={{width:'20px', height:'20px', border:'1px solid black', backgroundColor: "#1a237e"}}></div> </span>&nbsp;&nbsp;
          <p style={{ padding:"5px", display:'flex'  }}>
            Leaves :-{""}
            <div style={{width:'20px', height:'20px', border:'1px solid black',  backgroundColor: "#ffc107"}}></div>
          </p>&nbsp;&nbsp;
          
        
      </div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, color: "#4e0d3a" }}
        views={["month"]}
        eventPropGetter={(event) => ({
          style: {
            backgroundColor: event.color,
            borderRadius: 0,
          },
        })}
      />
    </div>
  );
};
