import styled from "@emotion/styled";

const Sidepane = (props) => {
  const Container = styled.div`
    background-color: #FFE279;
    flex: 1;
    background-image: radial-gradient(circle, #CDA81F 10%, transparent 10%),
      radial-gradient(circle, #CDA81F 10%, transparent 10%);
    background-size: 20px 20px;
    background-position: 0 0, 10px 10px;
  `;

  const Ribbon = styled.div`
    background-color: #DF2626;
    padding: 10px;
    min-height: 200px;
    position: relative;
    clip-path: polygon(0 5%, 100% 5%, 100% 100%, 50% 90%, 0 100%);
    z-index: 1;
    display: flex;
    flex-direction: column;
    margin:10px;
    border: 6px solid black;
`;

  const Pane1 = styled.div`
    height: 50%;
    transform: translateY(10%);
    display: flex;
    flex-direction: column;
  `;

  const Pane2 = styled.div`
    background-color: #DF2626;
    flex: 1;
    padding: 10px;
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    background-size: 20px 20px;
    background-position: 0 0, 20px 20px; 
    margin-top: 20px;
`;

  const Pane3 = styled.div`
    height: 20%;
  `;

  const Button = styled.button`
    margin: 10px;
    border: 3px solid black;
    background: white; 
    color: black; 
    font-weight: bold; 
    font-size: 12px;
    padding: 6px 12px;
`;

  const TextBox = styled.div`
    background-color: white;
    padding: 10px;
    text-align: center;
    font-size: 12px;
    border: 3px solid black;
  `;

  const handleButtonClick = (page) => {
    console.log(`Go to ${page}`);
    props.updatePage(props.pageDictionary[page]);
  };

  return (
    <Container>
      <Ribbon>
        <Pane1>
          <TextBox>
            This week-long celebration of all things tech features workshops, speaker panels, and a hackathon to end all hackathons.
          </TextBox>
        </Pane1>
        <Pane2>
          <Button onClick={() => handleButtonClick("Speakers")}>Go to Speakers</Button>
          <Button onClick={() => handleButtonClick("Schedule")}>Go to Schedule</Button>
          <Button onClick={() => handleButtonClick("Tracks")}>Go to Tracks</Button>
          <Button onClick={() => handleButtonClick("Judges")}>Go to Judges</Button>
        </Pane2>
        <Pane3>
          {/* */}
        </Pane3>
      </Ribbon>
    </Container>
  );
};

export default Sidepane;
