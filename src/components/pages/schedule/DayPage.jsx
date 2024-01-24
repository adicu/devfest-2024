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
  flex: 1;
  position: relative;
  padding-top: 1rem;

  text-align: center;

  padding-bottom: 1rem;
`;

const EventDiv = styled.div`
  margin-bottom: 1rem;

  background-color: white;
  border: black solid 1px;
  font-weight: bold;
  padding-left: 1rem;
  padding-right: 1rem;

  padding-bottom: 0.3rem;
`;

const FlexBox = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  width: 100%;
`;

const MainContent = styled.div`
  flex: 1;
`;

const GCalSection = styled.div`
  text-align: center;
  flex: 0;
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

  const Time = styled.h3`
    color: ${red};
  `;

  const SpeakerButton = styled.button`
    background: none !important;
    border: none;
    padding: 0 !important;
    /* color: #069; */
    /* text-decoration: underline; */
    /* cursor: pointer; */

    color: #886753;
    text-align: left;
  `;

  const handleClick = (e, speakerName) => {
    // console.log(`Button clicked with argument: ${speakerName}`);

    e.stopPropagation();
  };

  return (
    <Container>
      <FlexBox>
        <MainContent>
          <TitleDiv>
            <H1 className="font-badaboom">
              {dayOfWeek} {date}
            </H1>
          </TitleDiv>

          {events.map((event, eventIndex) => (
            <EventDiv key={eventIndex}>
              <Time>{event.Time}</Time>
              <h4>{event["Event name"]}</h4>

              {event["Speaker name"] == "" || event["Speaker name"] == "NA" ? (
                <></>
              ) : (
                <SpeakerButton
                  onClick={(e) => handleClick(e, event["Speaker name"])}
                >
                  <h4>
                    {event["Speaker name"]}
                    {/* {event["Company/Affiliation"] == ""
                      ? ""
                      : `(${event["Company/Affiliation"]})`} */}
                  </h4>
                </SpeakerButton>
              )}

              {event["Room (capacity)"] == "" ? (
                <></>
              ) : (
                <h5>In Room {event["Room (capacity)"]}</h5>
              )}

              {event["if online, link?"] == "" ? (
                <></>
              ) : (
                <h5>
                  <a href={event["if online, link?"]}>URL</a>
                </h5>
              )}
            </EventDiv>
          ))}
        </MainContent>

        <GCalSection>
          <a href="https://calendar.google.com/calendar/embed?showNav=0&showPrint=0&showCalendars=0&mode=week&wkst=2&src=c_bc14c15f5902a9aed966310e493cb9ec59ddcec237bd2963bb4f67a019bbf35a%40group.calendar.google.com&dates=20240129%2F20240204">
            <h2>Google Calendar</h2>
          </a>
        </GCalSection>
      </FlexBox>
    </Container>
  );
};

export default DayPage;
