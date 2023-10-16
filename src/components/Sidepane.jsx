import styled from "@emotion/styled";

const Sidepane = ({ mobile }) => {
  const Container = styled.div`
    background-color: gray;
    flex: 1;
  `;
  const SubContainer = styled.div`
    background-color: gray;
    flex: 1;
    flex-direction: column;
    height: 100%;
    padding: 10px;
  `;
  const Pane1 = styled.div`
    background-color: white;
    height: 33%;
    padding: 10px;
  `;
  const Pane2 = styled.div`
    background-color: white;
    height: 33%;
    padding: 10px;
  `;
  const Pane3 = styled.div`
    background-color:white;
    height: 34%;
    padding: 10px;

  `;

  return (
    <Container>
    <SubContainer>
      <Pane1><p>Pane1 here</p></Pane1>
      <Pane2><p>Pane2 here </p></Pane2>
      <Pane3><p>Pane3 here</p></Pane3>
    </SubContainer>
    </Container>
  );
};

export default Sidepane;
