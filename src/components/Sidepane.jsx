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

  const handleButtonClick = (page) => {
    console.log(`Go to ${page}`);
    props.updatePage(props.pageDictionary[page]);
  };

  return (
    <Container>
      <SubContainer>
        <Pane1>
          <p>Pane1 here</p>
          <button onClick={() => handleButtonClick("Speakers")}>Go to Speakers</button>
          <button onClick={() => handleButtonClick("Schedule")}>Go to Schedule</button>
          <button onClick={() => handleButtonClick("Tracks")}>Go to Tracks</button>
          <button onClick={() => handleButtonClick("Judges")}>Go to Judges</button>
          
          {/*<button onClick={() => handleButtonClick("FAQs")}>Go to FAQs</button>*/}
          {/*<button onClick={() => handleButtonClick("About ADI")}>Go to About ADI</button>*/}
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
