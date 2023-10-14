import styled from "@emotion/styled";
import PageFlip from "./book-components/PageFlip";

const Book = ({ data, mobile }) => {
  const Container = styled.div`
    background-color: lightblue;
    flex: 3;
  `;

  return (
    <Container>
      <PageFlip />
    </Container>
  );
};

export default Book;
