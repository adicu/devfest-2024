import styled from "@emotion/styled";

const Sidepane = (props) => {
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
    background-color: white;
    height: 34%;
    padding: 10px;
  `;

  console.log(props.pageDictionary);

  const handleButtonClick = (event) => {
    event.stopPropagation();

    console.log("Sidepane Button clicked");
    console.log(props.pageDictionary);

    props.updatePage(props.pageDictionary["Speakers"]);
  };

  return (
    <Container>
      <SubContainer>
        <Pane1>
          <p>Pane1 here</p>
          <button onClick={handleButtonClick}>Go to Speakers</button>
        </Pane1>
        <Pane2>
          <p>Pane2 here </p>
        </Pane2>
        <Pane3>
          <p>Pane3 here</p>
        </Pane3>
      </SubContainer>
    </Container>
  );
};

export default Sidepane;
