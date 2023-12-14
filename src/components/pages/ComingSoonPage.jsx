import styled from "@emotion/styled";

import starBurst from "../../../public/images/home/starburst.svg";

const ComingSoonPage = (props) => {
  const Container = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    background-image: url(${starBurst.src});
    background-repeat: no-repeat;
    background-position: left;
  `;

  const TextBox = styled.div`
    background-color: white;

    padding: 1rem;

    p {
      font-size: 1.6rem;
    }

    border: black solid 2px;

    box-shadow: 5px 5px black;
  `;

  return (
    <Container>
      <TextBox>
        <>
          <p>Coming Soon:</p>
          <br />
          <p>- Speakers</p>
          <p>- Events</p>
          <p>- & MORE DETAILS!</p>
          <br />
          <p>To Be Continued...</p>
        </>
      </TextBox>
    </Container>
  );
};

export default ComingSoonPage;
