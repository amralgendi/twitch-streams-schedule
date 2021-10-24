import Events from "./Events";
import { months } from "./months";

function Calendar({ date, events, eventState }) {
  let lastDate = new Date(date.date);
  lastDate.setMonth(lastDate.getMonth() + 1);
  lastDate.setDate(0);
  lastDate = lastDate.getDate();
  let firstDay = new Date(date.date);
  firstDay.setDate(1);
  firstDay = firstDay.getDay();
  const { schedules } = eventState;
  return (
    <div className="calendar">
      <div className="title" className="date">
        {months[date.date.getMonth()]}
      </div>
      <div className="week">
        <div>Sun</div>
        <div>Mon</div>
        <div>Tues</div>
        <div>Wed</div>
        <div>Thurs</div>
        <div>Fri</div>
        <div>Sat</div>
        {console.log(lastDate)}
      </div>
      <div className="days">
        {Array.from({ length: firstDay }, (_, i) => firstDay - i).map((day) => {
          return (
            <div className="date-prev" key={day}>
              {lastDate - day + 1}
            </div>
          );
        })}
        {Array.from({ length: lastDate }, (_, i) => i + 1).map((day, index) => {
          for (let i = 0; i < schedules.length; i++) {
            for (let j = 0; j < schedules[i].segments.length; j++) {
              if (
                date.date.getFullYear() ==
                  new Date(schedules[i].segments[j].start_time).getFullYear() &&
                date.date.getMonth() ==
                  new Date(schedules[i].segments[j].start_time).getMonth() &&
                day == new Date(schedules[i].segments[j].start_time).getDate()
              ) {
                console.log(day);
                return (
                  <div
                    onClick={() => {
                      events.setEvents({
                        streamer: schedules[i].broadcaster_name,
                        title: schedules[i].segments[j].title,
                        date: new Date(schedules[i].segments[j].start_time),
                      });
                    }}
                    key={index}
                    className="event"
                  >
                    {day}
                  </div>
                );
              }
            }
          }

          return <div key={index}>{day}</div>;
        })}
      </div>
    </div>
  );
}

export default Calendar;
