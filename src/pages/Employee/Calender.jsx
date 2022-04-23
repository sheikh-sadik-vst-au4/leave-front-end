import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
const localizer = momentLocalizer(moment);

export const MyCalendar = ({ holidays, leaves, leaveDetails }) => {

  let events = [];
  if (
    leaveDetails.toDate &&
    leaveDetails.saturdays.length &&
    leaveDetails.sundays.length
  ) {
    events = [
      {
        title: leaveDetails.leaveType.name,
        color: "#82bfd9",
        start: Date.parse(leaveDetails.fromDate),
        end: Date.parse(leaveDetails.toDate),
        allDay: true,
      },
      {
        title: "saturday",
        color: "#d50000",
        start: Date.parse(leaveDetails.saturdays[0].date),
        end: Date.parse(leaveDetails.saturdays[0].date),
        allDay: true,
      },
      {
        title: "sunday",
        color: "#d50000",
        start: Date.parse(leaveDetails.sundays[0].date),
        end: Date.parse(leaveDetails.sundays[0].date),
        allDay: true,
      },
    ];
  } else if (
    leaveDetails.toDate &&
    !leaveDetails.saturdays.length &&
    !leaveDetails.sundays.length
  ) {
    events = [
      {
        title: leaveDetails.leaveType.name,
        start: Date.parse(leaveDetails.fromDate),
        end: Date.parse(leaveDetails.toDate),
        allDay: true,
      },
    ];
  } else {
    events = [
      {
        title: leaveDetails.leaveType.name,
        start: Date.parse(leaveDetails.fromDate),
        end: Date.parse(leaveDetails.fromDate),
        allDay: true,
      },
    ];
  }

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

  // leaves.map((leave) => {
  //   if (leave.toDate) {
  //     let newEvent = {
  //       title: leave.leaveType.name,
  //       start: Date.parse(leave.fromDate),
  //       end: Date.parse(leave.toDate),
  //       allDay: true,
  //       color: "#ffc107",
  //       //red "#d50000",
  //       //green  "#1b5e20",
  //       // yellow "#ffc107",
  //     };
  //     return events.push(newEvent);
  //   } else {
  //     let newEvent = {
  //       title: leave.leaveType.name,
  //       start: Date.parse(leave.fromDate),
  //       end: Date.parse(leave.fromDate),
  //       allDay: true,
  //       color: "#ffc107",
  //       //red "#d50000",
  //       //green  "#1b5e20",
  //       // yellow "#ffc107",
  //     };
  //     return events.push(newEvent);
  //   }
  // });

  return (
    <div>
          
          <div style={{ display: "flex" }}>
          <span style={{ padding:"5px", display:'flex'  }}>Leaves:-  <div style={{width:'20px', height:'20px', border:'1px solid black', backgroundColor: "#82bfd9"}}></div> </span>&nbsp;&nbsp;
          <p style={{ padding:"5px", display:'flex'  }}>
            Full saturday/sunday Leave:-
            <div style={{width:'20px', height:'20px', border:'1px solid black',  backgroundColor: "#d50000"}}></div>
          </p>&nbsp;&nbsp;
          <p style={{ padding:"5px",display:'flex'  }}>
            Half day saturday:-
            <div style={{width:'20px', height:'20px', border:'1px solid black',  backgroundColor: "brown" }}></div>
          </p>&nbsp;&nbsp;
          <p style={{ padding:"5px", display:'flex'  }}>
            Holiday:-
            <div style={{width:'20px', height:'20px', border:'1px solid black',  backgroundColor:"#1a237e"}}></div>
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
