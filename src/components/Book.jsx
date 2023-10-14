import styled from "@emotion/styled";
import PageFlipApp from "./book-components/PageFlipApp";

const Book = (props) => {
  const Container = styled.div`
    background-color: lightblue;
    flex: 3;
  `;

  const toggleComponent = () => {
    if (props.currentPage < 3) {
      props.updatePage(props.currentPage + 1);
    } else {
      props.updatePage(1);
    }
  };

  return (
    <Container>
      <button onClick={toggleComponent}>Next Page</button>

      <PageFlipApp
        parentPage={props.currentPage}
        previousPage={props.previousPage}
      />
    </Container>
  );
};

export default Book;
