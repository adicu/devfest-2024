import styled from "@emotion/styled";
import PageFlipApp from "./book-components/PageFlipApp";

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
