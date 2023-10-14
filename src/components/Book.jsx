import styled from "@emotion/styled";
import PageFlipApp from "./book-components/PageFlipApp";

import TransitionComponent from "./book-components/TransitionComponent";

const Book = ({ data, mobile }) => {
  const Container = styled.div`
    background-color: lightblue;
    flex: 3;
  `;

  return (
    <Container>
      <TransitionComponent />
    </Container>
  );
};

export default Book;
