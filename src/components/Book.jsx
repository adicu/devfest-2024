import styled from "@emotion/styled";
import { useState } from "react";
import PageFlipApp from "./book-components/PageFlipApp";

const Book = ({ data, mobile }) => {
  const Container = styled.div`
    background-color: lightblue;
    flex: 3;
  `;

  const Temp = styled.div`
    background-color: red;
  `;

  return (
    <Container>
      <PageFlipApp />
    </Container>
  );
};

export default Book;
