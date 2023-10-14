import styled from "@emotion/styled";
import PageFlipApp from "./book-components/PageFlipApp";

// import PageComponent from "./book-components/PageComponent";

const Book = ({ data, mobile }) => {
  const Container = styled.div`
    background-color: lightblue;
    flex: 3;
  `;

  return (
    <Container>
      <PageFlipApp />
    </Container>
  );
};

export default Book;
