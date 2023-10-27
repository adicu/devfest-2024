import styled from "@emotion/styled";

const HomePageLeft = (props) => {
  const Container = styled.div`
    width: 100%;
    height: 100%;
    user-select: none;
  `;

  const handleButtonClick = (event) => {
    event.stopPropagation();

    console.log("Button clicked");
    console.log(props.pageDictionary);

    props.updatePage(props.pageDictionary["Speakers"]);
  };

  return (
    <Container>
      Home Page
      <br />
      <button onClick={handleButtonClick}>Example Button</button>
    </Container>
  );
};

export default HomePageLeft;
