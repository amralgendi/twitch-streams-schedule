function Events({ events }) {
  return (
    <div className="events">
      <div className="title">Events</div>
      {typeof events.events === "string" && <></>}
      {typeof events.events === "object" && (
        <div className="event">
          <div>channel: {events.events.streamer}</div>
          <div>title: {events.events.title}</div>
          <div>streams on:{events.events.date.toString().substring(0, 15)}</div>
        </div>
      )}
    </div>
  );
}

export default Events;
