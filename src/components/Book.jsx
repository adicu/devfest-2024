import styled from "@emotion/styled";
import PageFlipApp from "./book-components/PageFlipApp";

const Book = (props) => {
  const Container = styled.div`
    background-color: lightblue;
    flex: 3;
  `;

  return (
    <Container>
      <PageFlipApp
        parentPage={props.currentPage}
        previousPage={props.previousPage}
        updatePage={props.updatePage}
      />
    </Container>
  );
};

export default Book;
