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

    background-image: ${props.page == "1" ? `url(${starBurst.src})` : "none"};
    background-repeat: no-repeat;
  `;

  const TextBox = styled.div`
    background-color: white;

    padding: 1rem;

    font-size: 1.6rem;

    border: black solid 2px;

    box-shadow: 5px 5px black;
  `;

  return (
    <Container>
      <TextBox>
        {props.page == "1" ? (
          <>
            <p>Coming Soon:</p>
            <br />
            <p>- Speakers</p>
            <p>- Schedule</p>
            <p>- Events</p>
            <p>- & MORE!</p>
            <br className="mobile-shown" />
            <p className="mobile-shown">To Be Continued...</p>
          </>
        ) : (
          <p className="mobile-hidden">To Be Continued...</p>
        )}
      </TextBox>
      {/* <TextBox>
        <p>To Be Continued...</p>
      </TextBox> */}
    </Container>
  );
};

export default ComingSoonPage;
