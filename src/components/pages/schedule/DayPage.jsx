import styled from "@emotion/styled";

const Container = styled.div`
  width: 100%;
  height: 100%;

  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

const TitleDiv = styled.div`
  position: relative;
  padding-top: 1rem;

  text-align: center;

  padding-bottom: 1rem;
`;

const DayPage = (props) => {
  //   console.log("Data for " + props.dayOfWeek + " is " + props.data);

  // Do any data modifications up here
  const dayOfWeek = props.dayOfWeek;
  const date = props.date;
  const events = props.events;

  const preventDragHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <TitleDiv>
        <img
          className="svg-page-title"
          onDragStart={preventDragHandler}
          src="/images/titles/schedule.svg"
        />
      </TitleDiv>

      <h1>
        {dayOfWeek} {date}
      </h1>

      <a href="https://calendar.google.com/calendar/embed?showNav=0&showPrint=0&showCalendars=0&mode=week&wkst=2&src=c_bc14c15f5902a9aed966310e493cb9ec59ddcec237bd2963bb4f67a019bbf35a%40group.calendar.google.com&dates=20240129%2F20240204">
        <h2>Google Calendar</h2>
      </a>

      {events.map((event, eventIndex) => (
        <h2 key={eventIndex}>
          {event.Time} - {event["Event name"]}
          <br />
          {event["Speaker name"]}
        </h2>
      ))}
    </Container>
  );
};

export default DayPage;
