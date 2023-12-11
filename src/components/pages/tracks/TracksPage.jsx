import styled from "@emotion/styled";

// const textSizeMobile = "0.8rem";
const svgTitleSize = "5.5vw";
const svgTitleSizeMobile = "14vw";
const svgTitleSizeBig = "6rem";

const textSizeMobile = "0.8rem";
const textSize = "1vw";
const textSizeBig = "1.1rem";

const titleSizeMobile = "4.6vw";
const titleSize = "1.8vw";
const titleSizeBig = "2rem";

const TracksPage = (props) => {
  const NextPageMessage = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    /* margin-right: 0.2rem; */
    /* margin-top: 0.2rem; */
    color: gray;

    /* background-color: red; */

    font-size: 1vw;

    z-index: 1;

    @media (max-width: ${process.env.mobileWidth}) {
      display: none;
    }

    /* background-color: yellow; */
  `;

  const Container = styled.div`
    width: 100%;
    height: 100%;
    user-select: none;
  `;

  const TitleDiv = styled.div`
    position: relative;
    /* margin-left: 1rem; */
    padding-top: 1rem;

    /* width: ${svgTitleSize}; */
    width: 100%;
    text-align: center;
    img {
      height: ${svgTitleSize};
    }

    /* background-color: red; */

    @media (max-width: ${process.env.mobileWidth}) {
      img {
        /* height: 2.3rem; */
        height: ${svgTitleSizeMobile};
      }
    }

    @media (min-width: ${process.env.bigWidth}) {
      img {
        height: ${svgTitleSizeBig};
      }
    }
  `;
  const Top = styled.div`
    position: relative;
    max-width: 100%;

    display: flex;
    flex-direction: row;

    margin: 0.3rem;
  `;
  const Bottom = styled.div`
    width: 100%;

    display: flex;
    flex-direction: row;

    margin-left: 0.3rem;
    margin-right: 0.3rem;
  `;

  const TopLeft = styled.div`
    flex: 5;
    z-index: 2;
  `;

  const TopRight = styled.div`
    flex: 7;
    z-index: 1;
  `;

  const TextBox = styled.div`
    background-color: white;

    margin-bottom: 0.3rem;
    border: black solid 2px;

    p {
      font-size: ${textSize};
    }

    @media (max-width: ${process.env.mobileWidth}) {
      p {
        font-size: ${textSizeMobile};
      }
    }

    @media (min-width: ${process.env.bigWidth}) {
      p {
        font-size: ${textSizeBig};
      }
    }
  `;

  const MentalHealthTextBox = styled.div`
    background-color: white;

    height: 100%;

    margin-bottom: 0.3rem;
    border: black solid 2px;

    p {
      font-size: ${textSize};
    }

    @media (max-width: ${process.env.mobileWidth}) {
      p {
        font-size: ${textSizeMobile};
      }
    }

    @media (min-width: ${process.env.bigWidth}) {
      p {
        font-size: ${textSizeBig};
      }
    }
  `;

  const TextBoxEnvironment = styled.div`
    width: 130%;
    z-index: 7;
    background-color: white;

    margin-bottom: 0.3rem;
    border: black solid 2px;

    p {
      font-size: ${textSize};
    }

    @media (max-width: ${process.env.mobileWidth}) {
      p {
        font-size: ${textSizeMobile};
      }
    }

    @media (min-width: ${process.env.bigWidth}) {
      p {
        font-size: ${textSizeBig};
      }
    }
  `;

  const TitleBox = styled.div`
    display: inline-block;

    margin-bottom: 0.3rem;
    p {
      background-color: white;
      border: black solid 1px;
      font-size: ${titleSize};
      font-weight: bold;
      padding-left: 1rem;
      padding-right: 1rem;
    }

    @media (max-width: ${process.env.mobileWidth}) {
      p {
        font-size: ${titleSizeMobile};
      }
    }

    @media (min-width: ${process.env.bigWidth}) {
      p {
        font-size: ${titleSizeBig};
      }
    }
  `;

  const EnvironmentBox = styled.div`
    position: relative;
    width: 100%;
  `;

  const EnvironmentTitle = styled.div`
    position: absolute;

    bottom: 0;
    right: 0;

    display: inline-block;

    margin-bottom: 0.3rem;
    p {
      background-color: white;
      border: black solid 1px;
      font-size: ${titleSize};
      font-weight: bold;
      padding-left: 1rem;
      padding-right: 1rem;
    }

    @media (max-width: ${process.env.mobileWidth}) {
      p {
        font-size: ${titleSizeMobile};
      }
    }

    @media (min-width: ${process.env.bigWidth}) {
      p {
        font-size: ${titleSizeBig};
      }
    }
  `;

  const EnvironmentImage = styled.img`
    border: black solid 1px;
    width: 100%;
  `;

  const MentalHealthImageDiv = styled.div`
    flex: 3;
    height: 100%;
  `;

  const MentalHealthImage = styled.img`
    border: black solid 1px;
    width: 100%;
  `;

  const MentalHealthText = styled.div`
    flex: 3;
    margin-left: 0.3rem;
    margin-right: 0.6rem;
    display: flex;
    flex-direction: column;
  `;

  const PoliticsImage = styled.img`
    border: black solid 1px;
    width: 90%;
  `;

  const preventDragHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <TitleDiv>
        {/* <NextPageMessage>(Click to advance)</NextPageMessage> */}
        <img
          onDragStart={preventDragHandler}
          src="/images/tracks/tracks_title.svg"
        />
      </TitleDiv>
      <Top>
        <TopLeft>
          <PoliticsImage
            onDragStart={preventDragHandler}
            src="/images/tracks/politics_image.svg"
          />

          <TextBoxEnvironment>
            <p>
              In the face of climate change,
              <strong> environmental involvement</strong> is more crucial than
              ever. We encourage you to use technology to amplify awareness of
              these issues and empower others to work towards the wellbeing of
              our planet.
            </p>
          </TextBoxEnvironment>
        </TopLeft>

        <TopRight>
          <TitleBox>
            <p>Politics</p>
          </TitleBox>
          <TextBox>
            <p>
              Your mission is to increase political
              <strong> awareness and participation </strong>
              in elections. How can you leverage technology to enhance political
              awareness, engagement, and informed decision-making among
              citizens?
            </p>
          </TextBox>

          <EnvironmentBox>
            <EnvironmentImage
              onDragStart={preventDragHandler}
              src="/images/tracks/environment_image.svg"
            />
            <EnvironmentTitle>
              <p>Environment</p>
            </EnvironmentTitle>
          </EnvironmentBox>
        </TopRight>
      </Top>
      <Bottom>
        <MentalHealthImageDiv>
          <MentalHealthImage
            onDragStart={preventDragHandler}
            src="/images/tracks/mental_health_image.svg"
          />
        </MentalHealthImageDiv>
        <MentalHealthText>
          <TitleBox>
            <p>Mental Health</p>
          </TitleBox>
          <MentalHealthTextBox>
            <p>
              <strong>Mental health</strong> is at the forefront of wellNESS.
              How can we promote a culture of openness and wellbeing? This track
              asks you to develop a project that addresses challenges in mental
              health or posits innovative ways to bring awareness to this topic.
            </p>
          </MentalHealthTextBox>
        </MentalHealthText>
      </Bottom>
    </Container>
  );
};

export default TracksPage;
