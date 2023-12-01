import styled from "@emotion/styled";

const TracksPage = (props) => {
  const Container = styled.div`
    width: 100%;
    height: 100%;
    user-select: none;
    /* background-color: #e9e1d9; */
    display: flex;
    flex-direction: column;
  `;

  const SVGImageDiv = styled.div``;

  const TitleDiv = styled.div`
    /* flex: 0; */
    /* align-items: center; */
    /* background-color: yellow; */
    /* text-align: center; */
    /* justify-content: center; */

    /* width: 100%; */
    /* text-align: center; */

    /* height: 3rem; */
    margin: 0.5rem;
    margin-left: 1rem;
    img {
      /* display: block; */
      /* margin: 0 auto; */
      /* margin-right: auto; */
      /* margin-left: auto; */
      /* align-self: center; */
      /* height: 4rem; */
    }

    @media (max-width: ${process.env.mobileWidth}) {
      img {
        height: 2.3rem;
      }
    }
  `;
  const Top = styled.div`
    flex: 3;
    position: relative;
    max-width: 100%;

    margin: 1rem;
    background-color: yellow;
  `;
  const Bottom = styled.div`
    flex: 2;
    position: relative;
    max-width: 100%;
  `;

  const PoliticsImage = styled.img`
    position: absolute;
    /* height: 70%; */
    width: 40%;

    left: 0;
    top: 0;
  `;

  const Politics = styled.div`
    position: absolute;
    /* height: 70%; */

    width: 58%;

    right: 0;

    z-index: 6;
  `;

  const PoliticsText = styled.div`
    background-color: white;
    /* margin-right: 1rem; */

    border: black solid 2px;
  `;

  const PoliticsTitle = styled.p`
    background-color: white;

    border: black solid 2px;

    font-size: 1.4rem;

    font-weight: bold;
  `;

  const EnvironmentImage = styled.img`
    position: absolute;
    width: 58%;

    right: 0;
    bottom: 0;

    z-index: 5;
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
        <PoliticsImage
          onDragStart={preventDragHandler}
          src="/images/tracks/politics_image.svg"
        />

        <Politics>
          <PoliticsTitle>Politics</PoliticsTitle>
          <PoliticsText>
            <p>
              Your mission is to increase political
              <strong> awareness and participation </strong>
              in elections. How can you leverage technology to enhance political
              awareness, engagement, and informed decision-making among
              citizens?
            </p>
          </PoliticsText>
        </Politics>

        <EnvironmentImage
          onDragStart={preventDragHandler}
          src="/images/tracks/environment_image.svg"
        />
      </Top>

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
