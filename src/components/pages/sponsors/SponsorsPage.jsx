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

const SponsorsBox = styled.div`
  display: flex;           
  justify-content: center; 
  align-items: center;     
  text-align: center;     

  background-color: white;
  margin-bottom: 0.3rem;
  border: black solid 2px;
  padding: 20px;
  height: 100%;

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


const preventDragHandler = (e) => {
  e.preventDefault();
};

return (
  <Container>
    <TitleDiv>
      <img
        onDragStart={preventDragHandler}
        src="/images/sponsors/sponsors_title.svg"
      />
    </TitleDiv>
    <Top>
      <TopLeft>
      <TextBox>
          <p>
            DevFest '24 has been made possible with the help of our sponsors!
          </p>
        </TextBox>
      </TopLeft>
    </Top>
    <Bottom>
      <SponsorsBox>
        <img
        style={{width:200}}
        src="/images/sponsors/janestreet.png"/>
      </SponsorsBox>
      <SponsorsBox>
        <img
        style={{width:200}}
        src="/images/sponsors/echo3d.jpg"/>
      </SponsorsBox>
    </Bottom>
  </Container>
);
};

export default SponsorsPage;
