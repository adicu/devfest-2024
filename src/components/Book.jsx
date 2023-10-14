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

  // const [parentPage, setParentPage] = useState(1);

  var parentPage = 1;

  function setParentPage(newVal) {
    console.log("Old parent page " + parentPage);

    parentPage = newVal;
    console.log("New parent page " + parentPage);
  }

  return (
    <Container>
      <PageFlipApp parentPage={parentPage} setParentPage={setParentPage} />
    </Container>
  );
};

export default Book;
