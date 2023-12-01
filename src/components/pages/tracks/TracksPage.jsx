import styled from "@emotion/styled";

const TracksPage = (props) => {
  const Container = styled.div`
    width: 100%;
    height: 100%;
    user-select: none;
  `;

  const TitleDiv = styled.div`
    margin: 0.5rem;
    margin-left: 1rem;

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
    /* background-color: yellow; */
  `;
  const Bottom = styled.div`
    max-width: 100%;
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
      {/* <br /> */}
      <Bottom>Bottom</Bottom>
    </Container>
  );

  // return (
  //   <Container>
  //     <div style={{ position: "relative" }}>
  //       <img
  //         style={{
  //           display: "flex",
  //           height: "20%",
  //         }}
  //         src="/images/tracks/tracks_title.svg"
  //       />
  //       <img
  //         style={{
  //           display: "flex",
  //           height: "20%",
  //         }}
  //         src="/images/tracks/politics_title.svg"
  //       />
  //       <img
  //         style={{
  //           display: "flex",
  //           height: "20%",
  //         }}
  //         src="/images/tracks/politics_text.svg"
  //       />
  //       <img
  //         style={{
  //           display: "flex",
  //           height: "20%",
  //         }}
  //         src="/images/tracks/white_house.svg"
  //       />
  //       <img
  //         style={{
  //           display: "flex",
  //           height: "20%",
  //         }}
  //         src="/images/tracks/environment.svg"
  //       />
  //       <img
  //         style={{
  //           display: "flex",
  //           height: "20%",
  //         }}
  //         src="/images/tracks/mental_health_title.svg"
  //       />
  //       <img
  //         style={{
  //           display: "flex",
  //           height: "20%",
  //         }}
  //         src="/images/tracks/mental_health_text.svg"
  //       />
  //       <img
  //         style={{
  //           display: "flex",
  //           height: "20%",
  //           width: "100%",
  //         }}
  //         src="/images/tracks/zen.svg"
  //       />
  //     </div>
  //   </Container>
  // );
};

export default TracksPage;
