import styled from "@emotion/styled";

function isURL(str) {
  if (str === undefined) {
    return false;
  }
  if (str.includes("https://")) {
    return true;
  }

  return false;
}

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

const EventDescription = styled.div`
  margin-bottom: 1rem;

  /* background-color: white; */
  /* border: black solid 1px; */
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

const Cancelled = styled.h4`
  color: red;
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

  const Time = styled.h4`
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

  const SpeakerBox = styled.div`
    display: flex;
    flex-direction: row;

    margin-bottom: 1rem;
  `;

  const ImageBox = styled.div`
    flex: 4;

    ${(props) => props.left && "padding-right: 1rem;"}
    ${(props) => !props.left && "padding-left: 1rem;"}
  `;

  const Headshot = styled.img`
    width: 100%;

    border: solid black 2px;
  `;

  const InfoBox = styled.div`
    flex: 6;
  `;

  const NameBox = styled.div`
    display: flex;
    flex-direction: row;
    h4 {
      background-color: white;
      border: black solid 1px;
      font-weight: bold;
      padding-left: 1rem;
      padding-right: 1rem;
      margin-right: 1rem;
    }

    img {
      margin: 0;
      padding: 0;
    }

    margin-bottom: 1rem;
  `;

  const TextBox = styled.div`
    background-color: white;

    margin-bottom: 0.3rem;
    border: black solid 1px;

    box-shadow: 10px 5px 5px black;

    overflow-y: scroll;
    scrollbar-width: none; /* Firefox */
    ::-webkit-scrollbar {
      display: none; /* Safari and Chrome */
    }

    p {
      padding: 0.3rem;
    }
  `;

  const handleClick = (e, speakerName) => {
    // console.log(`Button clicked with argument: ${speakerName}`);

    e.stopPropagation();
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  // console.log(events);

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
            <div key={eventIndex}>
              {event["Time"] == "" ? (
                event["Speaker name"] == "Akbar Noman" ? (
                  <></>
                ) : (
                  <></>
                )
              ) : (
                <EventDiv>
                  {event["Speaker name"] == "Akbar Noman" ? (
                    <Cancelled>Cancelled</Cancelled>
                  ) : (
                    <Time>{event.Time}</Time>
                  )}

                  <h5>{event["Event name/title"]}</h5>

                  {event["Speaker name"] == "" ||
                  event["Speaker name"] == "NA" ||
                  event["Event name/title"] == "Alumni Panel" ||
                  event["Event name/title"] ==
                    "Judging & Submission Presentations" ? (
                    <></>
                  ) : (
                    <SpeakerButton
                      onClick={(e) => handleClick(e, event["Speaker name"])}
                    >
                      <h5>
                        {event["Speaker name"]}
                        {/* {event["Company/Affiliation"] == ""
                        ? ""
                        : ` from ${event["Company/Affiliation"]}`} */}
                      </h5>
                    </SpeakerButton>
                  )}

                  {event["Speaker name"] == "Akbar Noman" ? (
                    <></>
                  ) : (
                    <>
                      {event["Room (capacity)"] == "" ? (
                        <></>
                      ) : (
                        <h6>
                          {event["Room (capacity)"].replace(/\([^)]*\)/g, "")}
                        </h6>
                      )}

                      {/* {event["Zoom link"] == "" ? (
                        <></>
                      ) : (
                        <h6>
                          <a
                            onClick={stopPropagation}
                            href={event["Zoom link"]}
                          >
                            Zoom
                          </a>{" "}
                          password: <span className="font-sans">devfest24</span>
                        </h6>
                      )} */}
                    </>
                  )}
                </EventDiv>
              )}

              {event["Event description"] == "" ||
              event["Event description"] == "NA" ? (
                <></>
              ) : (
                <EventDescription>
                  <p>{event["Event description"]}</p>
                </EventDescription>
              )}

              {event["Speaker name"] == "" ||
              event["Speaker name"] == "NA" ||
              // event["Event name/title"] == "Alumni Panel" ||
              // event["Speaker name"] == "Akbar Noman" ||
              event["Headshot"] == "" ||
              event["Event name/title"] ==
                "Judging & Submission Presentations" ? (
                <></>
              ) : (
                <SpeakerBox>
                  <ImageBox left={true}>
                    <Headshot
                      src={
                        isURL(event["Headshot"])
                          ? event["Headshot"]
                          : `/images/speakers/${event["Headshot"]}`
                      }
                    />
                  </ImageBox>

                  <InfoBox>
                    <NameBox>
                      <h4 className="font-italic">{event["Speaker name"]}</h4>
                      {/* <img src="/images/speaker-assets/df-calendar.png" /> */}
                      {event["Linkedin/Website"] == "" ? (
                        <></>
                      ) : (
                        <a href={event["Linkedin/Website"]}>
                          <img
                            className="h4"
                            src="/images/speaker-assets/df-globe.png"
                          />
                        </a>
                      )}
                    </NameBox>
                    <TextBox className="max-height">
                      <p>{event["Bio"]}</p>
                    </TextBox>
                  </InfoBox>
                </SpeakerBox>
              )}
            </div>
          ))}
        </MainContent>

        <GCalSection>
          <a
            onClick={stopPropagation}
            href="https://calendar.google.com/calendar/embed?showNav=0&showPrint=0&showCalendars=0&mode=week&wkst=2&src=c_bc14c15f5902a9aed966310e493cb9ec59ddcec237bd2963bb4f67a019bbf35a%40group.calendar.google.com&dates=20240129%2F20240204"
          >
            <h2>Google Calendar</h2>
          </a>
        </GCalSection>
      </FlexBox>
    </Container>
  );
};

export default DayPage;
