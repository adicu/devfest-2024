import styled from "@emotion/styled";

const textSize = "1.5vh";
const titleSize = "2vh";

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

    background-color: rgb(219, 186, 163);

    p {
      margin-top: 1rem;
      margin-left: 1rem;
      margin-right: 1rem;

      font-size: ${textSize};
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

      font-size: ${textSize};
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

    font-size: ${titleSize};

    margin-top: 1rem;
    margin-left: 1.5rem;
    margin-right: 1.5rem;

    text-align: center;

    border: black solid 2px;
  `;

  const HostedByADI = styled.div`
    background-color: white;

    font-size: ${textSize};

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
        <LinksPane>
          <TextBox>Registration</TextBox>
          <p>
            <a href="https://forms.gle/JUZKqNf16qDa63HY9">Register</a> by the
            priority deadline December 30th for a guaranteed spot
          </p>
          <TextBox>Devfest Discord</TextBox>
          <p>
            <a href="https://discord.gg/9VtwmYVRnH">Join</a> our Devfest Discord
            community to ask questions, find teammates, and more!
          </p>
        </LinksPane>

        <ADIPane>
          <TextBox>Who is ADI?</TextBox>
          <p>
            <a href="https://www.adicu.com/">ADI</a> (Application Development
            Initiative) is a student group at Columbia University that aims to
            foster a community of students interested in technology.
          </p>
          <SocialLinks>
            <p> </p>
            <p>
              Stay in touch:{" "}
              <a href="https://instagram.com/adicolumbia">Instagram</a>,{" "}
              <a href="https://www.tiktok.com/@adicolumbia">TikTok</a>,{" "}
              <a href="https://discord.com/invite/ms5sa2Yq7T">Discord</a>
            </p>
          </SocialLinks>
          {/* <HostedByADI>Hosted by ADI</HostedByADI> */}
        </ADIPane>
      </FlexContainer>
    </Container>
  );
};

export default Sidepane;
