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

  margin-bottom: 1rem;
`;

const ImageBox = styled.div`
  flex: 4;

  /* padding-right: 1rem; */
  /* padding-left: 1rem; */

  ${(props) => props.left && "padding-right: 1rem;"}
  ${(props) => !props.left && "padding-left: 1rem;"}
`;

const Headshot = styled.img`
  width: 100%;

  border: solid black 2px;
`;

const InfoBox = styled.div`
  flex: 6;

  /* height: 100%; */
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

  /* height: 100%; */
  /* max-height: 50%; */
  /* max-height: 10vh; */
  /* max-height: 10vw; */
  overflow-y: scroll;
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }

  p {
    padding: 0.3rem;
  }
`;

const SpeakerPage = (props) => {
  const speakers = props.speakers; // Array of up to 3 speakers/event information

  // function goToEvent(eventName) {
  //   console.log("Event name " + eventName);
  // }

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
            <ImageBox left={true}>
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
              <h4 className="font-italic">{speaker["Speaker name"]}</h4>
              {/* <img src="/images/speaker-assets/df-calendar.png" /> */}
              {speaker["Linkedin/Website"] == "" ? (
                <></>
              ) : (
                <a href={speaker["Linkedin/Website"]}>
                  <img
                    className="h4"
                    src="/images/speaker-assets/df-globe.png"
                  />
                </a>
              )}
            </NameBox>
            {/* <h4>{speaker["Company/Affiliation"]}</h4> */}
            {/* <br /> */}
            {/* <a href={speaker["Linkedin/Website"]}>LinkedIn/Website</a> */}
            {/* <br /> */}
            {/* <button onClick={() => goToEvent(speaker["Event name"])}>
              Go to event
            </button> */}
            {/* <br /> */}
            <TextBox className="max-height">
              <p>{speaker["Bio"]}</p>
            </TextBox>
          </InfoBox>

          {speakerIndex % 2 == 0 ? (
            <></>
          ) : (
            <ImageBox left={false}>
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
