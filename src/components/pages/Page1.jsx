import styled from "@emotion/styled";

const Page1 = (props) => {
  const Container = styled.div`
    background-color: yellow;
    height: 50%;

    pointer-events: ${props.visible ? "all" : "none"};
  `;

  const handleButtonClick = (event) => {
    console.log("Button clicked");
    event.stopPropagation();
  };
  return (
    <Container onClick={props.onClick}>
      <button onClick={handleButtonClick}>Go to page 3</button>
      Hello There
    </Container>
  );
};

export default Page1;
