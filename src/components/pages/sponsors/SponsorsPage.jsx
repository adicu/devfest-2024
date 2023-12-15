import styled from "@emotion/styled";

const SponsorsPage = (props) => {
  const Container = styled.div`
    width: 100%;
    height: 100%;
    user-select: none;
  `;

  const TitleDiv = styled.div`
    margin-left: 1rem;
    padding-top: 1rem;

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
    max-width: 100%;

    display: flex;
    flex-direction: column;

    margin-left: 0.3rem;
    margin-right: 0.3rem;
  `;

  const TopLeft = styled.div`
    flex: 5;
    z-index: 2;
  `;

  const TextBox = styled.div`
    background-color: white;

    padding: 0.3rem;
    margin-bottom: 0.3rem;
    border: black solid 2px;
  `;

  const SponsorsBox = styled.div`
    /* display: flex; */
    justify-content: center;
    align-items: center;
    text-align: center;

    background-color: white;
    margin-bottom: 0.3rem;
    border: black solid 2px;
    /* padding: 20px; */
    height: 100%;

    padding: ${(props) => (props.forty ? "40px" : "20px")};
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
          src="/images/sponsors/sponsors_title.svg"
        />
      </TitleDiv>

      {/* <TitleDiv>
        <img
          className="svg-page-title-long"
          onDragStart={preventDragHandler}
          src="/images/sponsors/withsupportfrom_title.svg"
        />
      </TitleDiv> */}
      <Top>
        <TopLeft>
          {/*
        <TextBox>
          <p>
            DevFest '24 has been made possible with the help of our sponsors!
          </p>
        </TextBox>
        */}
          <TextBox>
            <h5>DevFest '24 is made possible with the help of...</h5>
          </TextBox>
        </TopLeft>
      </Top>
      <Bottom>
        <SponsorsBox>
          <img width={200} src="/images/sponsors/janestreet.png" />
          {/* <h4>Jane Street</h4> */}
        </SponsorsBox>
        <SponsorsBox forty={true}>
          <img width={200} src="/images/sponsors/echo3d.png" />
          {/* <h4>Echo3D</h4> */}
        </SponsorsBox>
        <SponsorsBox>
          <img width={100} src="/images/sponsors/cscu.png" />
          {/* <h4>CS @ Columbia</h4> */}
        </SponsorsBox>
      </Bottom>
    </Container>
  );
};

export default SponsorsPage;
