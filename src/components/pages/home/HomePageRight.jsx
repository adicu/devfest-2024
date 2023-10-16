import styled from "@emotion/styled";

const HomePageLeft = (props) => {
  const Container = styled.div`
    height: 100%;
    width: 100%;
  `;

  const handleButtonClick = (event) => {
    event.stopPropagation();

    console.log("Button clicked");
  };

  return (
    <Container>
      Hello There, and welcome to the wonderful home page (right)
      <button onClick={handleButtonClick}>Click Me</button>
    </Container>
  );
};

export default HomePageLeft;
