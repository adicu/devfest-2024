import styled from "@emotion/styled";

const HomePageLeft = (props) => {
  const Container = styled.div`
    width: 100%;
    height: 100%;
  `;

  const handleButtonClick = (event) => {
    event.stopPropagation();

    console.log("Button clicked");
  };

  return (
    <Container>
      Hello There, and welcome to the wonderful home page (left)
      <button onClick={handleButtonClick}>Click Me</button>
    </Container>
  );
};

export default HomePageLeft;
