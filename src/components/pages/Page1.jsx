import styled from "@emotion/styled";

const Page1 = (props) => {
  const Container = styled.div`
    background-color: yellow;
    height: 50%;

    pointer-events: ${props.visible ? "all" : "none"};
  `;

  function clicked() {
    console.log("Go to page 3");
  }

  return (
    <Container onClick={props.onClick}>
      <button onClick={clicked}>Go to page 3</button>
      Hello There
    </Container>
  );
};

export default Page1;
