import styled from "@emotion/styled";

const TracksPage = (props) => {
  const Container = styled.div`
    width: 100%;
    height: 100%;
    user-select: none;
  `;

  const TitleDiv = styled.div`
    margin-left: 1rem;
    padding-top: 1rem;

    @media (max-width: ${process.env.mobileWidth}) {
      img {
        height: 2.3rem;
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
    max-width: 100%;

    /* background-color: red; */

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
      font-size: 0.9rem;
    }

    @media (max-width: ${process.env.mobileWidth}) {
      p {
        font-size: 0.7rem;
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
      font-size: 0.9rem;
    }

    @media (max-width: ${process.env.mobileWidth}) {
      p {
        font-size: 0.7rem;
      }
    }
  `;

  const TitleBox = styled.div`
    display: inline-block;

    margin-bottom: 0.3rem;
    p {
      background-color: white;
      border: black solid 1px;
      font-size: 1.3rem;
      font-weight: bold;
      padding-left: 1rem;
      padding-right: 1rem;
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
      font-size: 1.3rem;
      font-weight: bold;
      padding-left: 1rem;
      padding-right: 1rem;
    }
  `;

  const EnvironmentImage = styled.img`
    width: 100%;
  `;

  const MentalHealthImageDiv = styled.div`
    flex: 3;
  `;

  const MentalHealthImage = styled.img`
    width: 100%;
  `;

  const MentalHealthText = styled.div`
    flex: 3;
    margin-left: 0.3rem;
  `;

  const PoliticsImage = styled.img`
    width: 90%;
  `;

  const preventDragHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <TitleDiv>
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
          <TextBox>
            <p>
              <strong>Mental health</strong> is at the forefront of wellNESS.
              How can we promote a culture of openness and wellbeing? This track
              asks you to develop a project that addresses challenges in mental
              health or posits innovative ways to bring awareness to this topic.
            </p>
          </TextBox>
        </MentalHealthText>
      </Bottom>
    </Container>
  );
};

export default TracksPage;
