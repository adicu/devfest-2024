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
  // Do any data modifications up here
  const dayOfWeek = props.dayOfWeek;
  const date = props.date;
  const events = props.events;

  const red = "rgb(193, 69, 0)";
  const yellow = "rgb(231, 187, 62)";
  const blue = "rgb(88, 205,197)";

  let headerColor = red;
  switch (dayOfWeek) {
    case "Monday":
      headerColor = yellow;
      break;
    case "Tuesday":
      headerColor = blue;
      break;
    case "Wednesday":
      headerColor = red;
      break;
    case "Thursday":
      headerColor = yellow;
      break;
    case "Friday":
      headerColor = blue;
      break;
    case "Saturday":
      headerColor = red;
      break;
    case "Sunday":
      headerColor = yellow;
      break;
  }

  const H1 = styled.h1`
    font-style: normal;
    color: ${headerColor};

    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
    text-shadow: 0px 4px 0px #000000;
  `;

  return (
    <Container>
      <TitleDiv>
        <H1 className="font-badaboom">
          {dayOfWeek} {date}
        </H1>
      </TitleDiv>

      {events.map((event, eventIndex) => (
        <h2 key={eventIndex}>
          {event.Time}
          <br />
          {event["Event name"]}
          <br />
          {event["Speaker name"]}
        </h2>
      ))}

      <a href="https://calendar.google.com/calendar/embed?showNav=0&showPrint=0&showCalendars=0&mode=week&wkst=2&src=c_bc14c15f5902a9aed966310e493cb9ec59ddcec237bd2963bb4f67a019bbf35a%40group.calendar.google.com&dates=20240129%2F20240204">
        <h2>Google Calendar</h2>
      </a>
    </Container>
  );
};

export default DayPage;
