import styled from "@emotion/styled";

const Sidepane = (props) => {
  const Container = styled.div`
    background-color: yellow;
    flex: 1;
    background-image: radial-gradient(circle, orange 10%, transparent 10%),
      radial-gradient(circle, orange 10%, transparent 10%);
    background-size: 20px 20px;
    background-position: 0 0, 10px 10px;
  `;

  const Ribbon = styled.div`
    background-color: red;
    padding: 10px;
    min-height: 200px;
    position: relative;
    clip-path: polygon(0 5%, 100% 5%, 100% 100%, 50% 90%, 0 100%);
    z-index: 1;
    display: flex;
    flex-direction: column;
    /*background-image: radial-gradient(circle, #fff 10%, transparent 10%),
      radial-gradient(circle, #fff 10%, transparent 10%);
    background-size: 20px 20px;
    background-position: 0 0, 10px 10px;*/
    margin:10px;
    border: 6px solid black;
`;

const Pane2 = styled.div`
  background-color: red;
  flex: 1;
  padding: 10px;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  /*background-image: radial-gradient(circle, #fff 10%, transparent 10%);
  background-size: 20px 20px;
  background-position: 0 0, 20px 20px; /* Adjust the positions */
  margin-top: 20px;
`;


  const Pane1 = styled.div`
    background-color: grey;
    height: 50%;
    transform: translateY(10%);
    display: flex;
    flex-direction: column;
  `;



  const Pane3 = styled.div`
    background-color: lightblue;
    height: 20%;
  `;

  const Button = styled.button`
    margin: 10px;
    border: 3px solid black;
    background: white; /* Set the background color to white */
    color: black; /* Set the font color to black */
    font-weight: bold; /* Make the font bold */
`;

  const TextBox = styled.div`
    background-color: white;
    padding: 10px;
    text-align: center;
    font-size: 12px;
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
