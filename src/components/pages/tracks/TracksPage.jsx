import styled from "@emotion/styled";

const TracksPage = (props) => {
  const Container = styled.div`
    width: 100%;
    height: 100%;
    user-select: none;
    display: block;
    /* flex-direction: column; */
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
    /* flex: 3; */
    position: relative;
    max-width: 100%;

    /* display: inline-block; */
    display: flex;
    flex-direction: row;

    margin: 0.3rem;
    background-color: yellow;
  `;
  const Bottom = styled.div`
    flex: 2;
    /* position: relative; */
    max-width: 100%;
  `;

  const TopLeft = styled.div`
    /* position: absolute; */
    width: 40%;

    left: 0;
    top: 0;
  `;

  const TopRight = styled.div`
    /* position: absolute; */

    width: 60%;

    right: 0;
  `;

  const TextBox = styled.div`
    background-color: white;
    /* margin-right: 1rem; */

    margin-bottom: 0.3rem;
    border: black solid 2px;

    p {
      font-size: 1rem;
    }
  `;

  const TitleBox = styled.div`
    background-color: purple;
    text-align: center;

    /* width: 50%; */
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
    /* position: absolute; */
    width: 100%;

    /* z-index: 5; */
  `;

  const PoliticsImage = styled.img`
    /* position: absolute; */
    width: 90%;

    /* z-index: 5; */
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

          <EnvironmentImage
            onDragStart={preventDragHandler}
            src="/images/tracks/environment_image.svg"
          />
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
