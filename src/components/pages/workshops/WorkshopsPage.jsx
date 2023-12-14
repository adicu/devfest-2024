import styled from "@emotion/styled";

const svgDaySize = "2.5vw";
const svgDaySizeMobile = "7vw";
const svgDaySizeBig = "3.5rem";

const preventDragHandler = (e) => {
  e.preventDefault();
};

const TitleDiv = styled.div`
  position: relative;
  padding-top: 1rem;
  margin-bottom: 1rem;

  width: 100%;
  text-align: center;
`;

const TextBox = styled.div`
  height: 100%;
  margin-bottom: 0.3rem;

  .day_title {
    position: relative;
    height: ${svgDaySize};
    display: block;
    margin-left: auto;
    margin-right: auto;
    z-index: 2;
  }
  .ws_bubble {
    position: relative;
    width: 95%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    z-index: 2;
  }
  .yellow {
    z-index: 1;
  }
  @media (max-width: ${process.env.mobileWidth}) {
    .day_title {
      position: relative;
      height: ${svgDaySizeMobile};
      display: block;
      margin-left: auto;
      margin-right: auto;
      z-index: 2;
    }
    .ws_bubble {
      position: relative;
      height: 60%;
      display: block;
      margin-left: auto;
      margin-right: auto;
      z-index: 2;
    }
  }

  @media (min-width: ${process.env.bigWidth}) {
    .day_title {
      position: relative;
      height: ${svgDaySizeBig};
      display: block;
      margin-left: auto;
      margin-right: auto;
      z-index: 2;
    }
    .ws_bubble {
      position: relative;
      height: 60%;
      display: block;
      margin-left: auto;
      margin-right: auto;
      z-index: 2;
    }
  }
`;

const Top = styled.div`
  position: relative;
  max-width: 100%;
  height: 30%;
  display: flex;
  flex-direction: row;
  margin-bottom: 0.5rem;
`;
const TopLeft = styled.div`
  flex: 5;
`;
const TopRight = styled.div`
  flex: 5;
`;

const Middle = styled.div`
  position: relative;
  max-width: 100%;
  height: 30%;
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
`;
const MidLeft = styled.div`
  flex: 5;
`;
const MidRight = styled.div`
  flex: 5;
`;

const Bottom = styled.div`
  max-width: 80%;
  height: 20%;
  margin-left: auto;
  margin-right: auto;
`;

const WorkshopsPage = (props) => {
  const Container = styled.div`
    width: 100%;
    height: 100%;
    user-select: none;
  `;

  return (
    <Container>
      <TitleDiv>
        <img
          className="svg-page-title"
          onDragStart={preventDragHandler}
          src="/images/workshops/workshops_title.svg"
        />
      </TitleDiv>
      <Top>
        <TopLeft>
          <TextBox>
            <img
              className="day_title"
              onDragStart={preventDragHandler}
              src="/images/workshops/Monday.svg"
            />
            <img
              className="ws_bubble"
              onDragStart={preventDragHandler}
              src="/images/workshops/Monday_ws.svg"
            />
          </TextBox>
        </TopLeft>
        <TopRight>
          <TextBox>
            <br />
            <br />
            <img
              className="day_title"
              onDragStart={preventDragHandler}
              src="/images/workshops/Tuesday.svg"
            />
            <img
              className="ws_bubble"
              onDragStart={preventDragHandler}
              src="/images/workshops/Tuesday_ws.svg"
            />
          </TextBox>
        </TopRight>
      </Top>
      <Middle>
        <MidLeft>
          <TextBox>
            <img
              className="day_title"
              onDragStart={preventDragHandler}
              src="/images/workshops/Wednesday.svg"
            />
            <img
              className="ws_bubble"
              onDragStart={preventDragHandler}
              src="/images/workshops/Wednesday_ws.svg"
            />
            <br />
            <img
              className="ws_bubble yellow"
              onDragStart={preventDragHandler}
              src="/images/workshops/yellow.svg"
            />
          </TextBox>
        </MidLeft>
        <MidRight>
          <TextBox>
            <br />
            <br />
            <img
              className="day_title"
              onDragStart={preventDragHandler}
              src="/images/workshops/Thursday.svg"
            />

            <img
              className="ws_bubble"
              onDragStart={preventDragHandler}
              src="/images/workshops/Thursday_ws.svg"
            />
          </TextBox>
        </MidRight>
      </Middle>
      <Bottom>
        <TextBox>
          <img
            className="day_title"
            onDragStart={preventDragHandler}
            src="/images/workshops/Friday.svg"
          />
          <img
            className="ws_bubble"
            onDragStart={preventDragHandler}
            src="/images/workshops/Friday_ws.svg"
          />
        </TextBox>
      </Bottom>
    </Container>
  );
};

export default WorkshopsPage;
