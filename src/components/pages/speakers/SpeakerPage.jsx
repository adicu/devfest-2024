import styled from "@emotion/styled";

// function isURL(str) {
//   // Regular expression for a simple URL pattern
//   const urlPattern =
//     /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;

//   // Test the string against the regular expression
//   return urlPattern.test(str);
// }

// const validator = require("validator");

// function isURL(str) {
//   return validator.isURL(str);
// }

function isURL(str) {
  if (str.includes("https://")) {
    return true;
  }

  return false;
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  user-select: none;
`;

const TitleDiv = styled.div`
  position: relative;
  padding-top: 1rem;

  width: 100%;
  text-align: center;
`;

const SpeakerBox = styled.div`
  display: flex;
  flex-direction: row;
`;

const ImageBox = styled.div`
  flex: 4;
`;

const Headshot = styled.img`
  width: 100%;
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
  }
`;

const SpeakerPage = (props) => {
  const speakers = props.speakers; // Array of up to 3 speakers/event information

  function goToEvent(eventName) {
    console.log("Event name " + eventName);
  }

  const preventDragHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <TitleDiv>
        <img
          className="svg-page-title"
          onDragStart={preventDragHandler}
          src={
            props.judges
              ? "/images/titles/judges.svg"
              : "/images/titles/speakers.svg"
          }
        />
      </TitleDiv>
      {speakers.map((speaker, speakerIndex) => (
        <SpeakerBox key={speakerIndex}>
          {speakerIndex % 2 == 0 ? (
            <ImageBox>
              <Headshot
                src={
                  isURL(speaker["Headshot"])
                    ? speaker["Headshot"]
                    : `/images/speakers/${speaker["Headshot"]}`
                }
              />
            </ImageBox>
          ) : (
            <></>
          )}

          <InfoBox>
            <NameBox>
              <h4>{speaker["Speaker name"]}</h4>
              <img src="/images/speaker-assets/df-calendar.png" />
              <img src="/images/speaker-assets/df-globe.png" />
            </NameBox>
            <h4>{speaker["Company/Affiliation"]}</h4>
            <br />
            <a href={speaker["Linkedin/Website"]}>LinkedIn/Website</a>
            <br />
            <button onClick={() => goToEvent(speaker["Event name"])}>
              Go to event
            </button>
            <br />
            <p>{speaker["Bio"]}</p>
          </InfoBox>

          {speakerIndex % 2 == 0 ? (
            <></>
          ) : (
            <ImageBox>
              <Headshot
                src={
                  isURL(speaker["Headshot"])
                    ? speaker["Headshot"]
                    : `/images/speakers/${speaker["Headshot"]}`
                }
              />
            </ImageBox>
          )}
        </SpeakerBox>
      ))}
    </Container>
  );
};

export default SpeakerPage;
