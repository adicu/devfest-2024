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

  const SponsorsBox = styled.a`
    text-decoration: none;
    justify-content: center;
    align-items: center;
    text-align: center;

    background-color: white;
    margin-bottom: 0.3rem;
    border: black solid 2px;
    height: 100%;

    p {
      color: black;
    }

    padding: ${(props) => (props.forty ? "40px" : "20px")};
  `;

  const ABCLogo = styled.span`
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
    --rem: 16;
    line-height: 1.42857143;
    font-family: "trajan-pro-3", sans-serif;
    font-size: 48px;
    -webkit-font-smoothing: antialiased;
    color: #24598c;
    font-weight: 400;
    font-style: normal;
    box-sizing: border-box;
    display: block;
  `;

  const preventDragHandler = (e) => {
    e.preventDefault();
  };

  const handleClick = (e) => {
    e.stopPropagation();
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

      <Top>
        <TopLeft>
          <TextBox>
            <h5>DevFest '24 is made possible with the help of...</h5>
          </TextBox>
        </TopLeft>
      </Top>
      <Bottom>
        <SponsorsBox onClick={handleClick} href="https://www.janestreet.com/">
          <img width={200} src="/images/sponsors/janestreet.png" />
        </SponsorsBox>
        <SponsorsBox
          onClick={handleClick}
          href="https://www.echo3d.com/"
          forty={true}
        >
          <img width={200} src="/images/sponsors/echo3d.png" />
        </SponsorsBox>
        <SponsorsBox onClick={handleClick} href="https://www.cs.columbia.edu/">
          <img width={100} src="/images/sponsors/cscu.png" />
        </SponsorsBox>
        <SponsorsBox
          onClick={handleClick}
          href="https://abc.studentgroups.columbia.edu/"
        >
          <ABCLogo className="font-trajan">ABC</ABCLogo>
          <p className="font-trajan">Activities Board at Columbia</p>
        </SponsorsBox>
      </Bottom>
    </Container>
  );
};

export default SponsorsPage;
