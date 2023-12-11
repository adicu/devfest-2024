import styled from "@emotion/styled";

const Sidepane = (props) => {
  const Container = styled.div`
    flex: 1;
    height: 100%;

    margin-right: 1rem;
  `;

  const FlexContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;

    margin-right: 1rem;
  `;

  const LinksPane = styled.div`
    flex: 1;
    border: solid 3px;

    margin-bottom: 1rem;

    background-color: white;

    p {
      margin-top: 1rem;
      margin-left: 1rem;
      margin-right: 1rem;

      font-size: 1rem;
    }
  `;

  const ADIPane = styled.div`
    position: relative;
    flex: 1;
    border: solid 3px;

    background-color: rgb(219, 186, 163);

    p {
      margin-top: 1rem;
      margin-left: 1rem;
      margin-right: 1rem;

      font-size: 1rem;
    }

    /* overflow-y: scroll;
    overflow-x: none;

    scrollbar-width: none;

    ::-webkit-scrollbar {
      display: none;
    } */
  `;

  const TextBox = styled.div`
    background-color: white;

    font-size: 1.2rem;

    margin-top: 1rem;
    margin-left: 1.5rem;
    margin-right: 1.5rem;

    text-align: center;

    border: black solid 2px;
  `;

  const HostedByADI = styled.div`
    background-color: white;

    font-size: 1rem;

    float: left;

    border: black solid 1px;
    border-bottom: 0;
    border-left: 0;

    position: absolute;
    bottom: 0;
    left: 0;
  `;

  const SocialLinks = styled.div``;

  return (
    <Container className="mobile-hidden">
      <FlexContainer>
        {/* <LinksPane>
          <p>Important Links</p>
        </LinksPane> */}
        <ADIPane>
          <TextBox>Who is ADI?</TextBox>

          <p>
            <a href="https://www.adicu.com/">ADI</a> (Application Development
            Initiative) is a student group at Columbia University that aims to
            foster a community of students interested in technology.
          </p>

          {/* <SocialLinks>
            <p>Social Links</p>
          </SocialLinks> */}

          <HostedByADI>Hosted by ADI</HostedByADI>
        </ADIPane>
      </FlexContainer>
    </Container>
  );
};

export default Sidepane;
