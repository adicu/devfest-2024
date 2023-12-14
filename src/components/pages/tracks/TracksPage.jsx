import styled from "@emotion/styled";

const TracksPage = (props) => {
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
  `;

  const MentalHealthTextBox = styled.div`
    background-color: white;

    height: 100%;

    margin-bottom: 0.3rem;
    border: black solid 2px;
  `;

  const TextBoxEnvironment = styled.div`
    width: 130%;
    z-index: 7;
    background-color: white;

    margin-bottom: 0.3rem;
    border: black solid 2px;
  `;

  const TitleBox = styled.div`
    display: inline-block;

    margin-bottom: 0.3rem;
    h4 {
      background-color: white;
      border: black solid 1px;
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
    h4 {
      background-color: white;
      border: black solid 1px;
      font-weight: bold;
      padding-left: 1rem;
      padding-right: 1rem;
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
        <img
          className="svg-page-title"
          onDragStart={preventDragHandler}
          src="/images/tracks/tracks_title.svg"
        />
      </TitleDiv>
      <Top>
        <TopLeft>
          <PoliticsImage
            onDragStart={preventDragHandler}
            src="/images/tracks/politics_image.jpg"
          />

          <TextBoxEnvironment>
            <p>
              In the face of climate change,
              <span className="font-bold"> environmental involvement</span> is
              more crucial than ever. We encourage you to use technology to
              amplify awareness of these issues and empower others to work
              towards the wellbeing of our planet.
            </p>
          </TextBoxEnvironment>
        </TopLeft>

        <TopRight>
          <TitleBox>
            <h4>Politics</h4>
          </TitleBox>
          <TextBox>
            <p>
              Your mission is to increase political
              <span className="font-bold"> awareness and participation </span>
              in elections. How can you leverage technology to enhance political
              awareness, engagement, and informed decision-making among
              citizens?
            </p>
          </TextBox>

          <EnvironmentBox>
            <EnvironmentImage
              onDragStart={preventDragHandler}
              src="/images/tracks/environment_image.jpg"
            />
            <EnvironmentTitle>
              <h4>Environment</h4>
            </EnvironmentTitle>
          </EnvironmentBox>
        </TopRight>
      </Top>
      <Bottom>
        <MentalHealthImageDiv>
          <MentalHealthImage
            onDragStart={preventDragHandler}
            src="/images/tracks/mental_health_image.jpg"
          />
        </MentalHealthImageDiv>
        <MentalHealthText>
          <TitleBox>
            <h4>Mental Health</h4>
          </TitleBox>
          <MentalHealthTextBox>
            <p>
              <span className="font-bold">Mental health</span> is at the
              forefront of wellNESS. How can we promote a culture of openness
              and wellbeing? This track asks you to develop a project that
              addresses challenges in mental health or posits innovative ways to
              bring awareness to this topic.
            </p>
          </MentalHealthTextBox>
        </MentalHealthText>
      </Bottom>
    </Container>
  );
};

export default TracksPage;
