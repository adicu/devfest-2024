import styled from "@emotion/styled";

const Page1 = (props) => {
  const Container = styled.div`
    background-color: green;
    height: 100%;
  `;

  const handleButtonClick = (event) => {
    event.stopPropagation();

    console.log("Button clicked");
  };

  return (
    <Container>
      Hello There, and welcome to the wonderful page
      <button onClick={handleButtonClick}>Click Me</button>
    </Container>
  );
};

export default Page1;
