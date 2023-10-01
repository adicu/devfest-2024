import styled from "@emotion/styled";

const Sidepane = ({ mobile }) => {
  const Container = styled.div`
    background-color: gray;
    flex: 1;
  `;

  return (
    <Container>
      <p>Sidepane here</p>
    </Container>
  );
};

export default Sidepane;
