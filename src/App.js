import { useState } from "react";
import Calendar from "./Calendar";
import Month from "./Month";
import Events from "./Events";
import "./App.css";

const events = [
  { title: "sawsan", description: "sas", date: new Date("2002-06-04") },
  { title: "sawsan", description: "sas", date: new Date("2015-04-06") },
];

function App() {
  const [date, setDate] = useState(new Date());
  const [event, setEvent] = useState("");
  const [events, setEvents] = useState("");
  window.addEventListener("message", (message) => {
    setEvent(message.data);
  });
  const checkEvent = () => {
    if (event !== "") {
      return event.schedules[0].broadcaster_id;
    } else {
      return "a";
    }
  };
  console.log(event);
  return (
    <>
      {typeof event === "object" && (
        <div className="container">
          <Month date={{ date, setDate }} />
          <Calendar
            date={{ date, setDate }}
            eventState={event}
            events={{ events, setEvents }}
          />
          <Events
            date={{ date, setDate }}
            eventState={event}
            events={{ events, setEvents }}
          />
        </div>
      )}
      {typeof event === "string" && (
        <div>
          <button
            onClick={(e) => {
              e.preventDefault();
              window.open(
                `https://id.twitch.tv/oauth2/authorize?client_id=1xi1xqsxy81npz64rpqisyp5vbxcoa&redirect_uri=http://localhost:3000/new-window.html&response_type=code&scope=user:read:email`,
                "name",
                "width=600,height=400"
              );
            }}
          >
            Open
          </button>
        </div>
      )}
    </>
  );
}

export default App;
