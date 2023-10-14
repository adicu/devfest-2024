import styled from "@emotion/styled";
import { useState } from "react";
import PageFlipApp from "./book-components/PageFlipApp";

const Book = ({ data, mobile }) => {
  const Container = styled.div`
    background-color: lightblue;
    flex: 3;
  `;

  const [parentPage, setParentPage] = useState(1);

  function updateParentPage(newVal) {
    console.log("Old parent page " + parentPage);

    setParentPage(newVal);
    console.log("New parent page " + parentPage);
  }

  const toggleComponent = () => {
    console.log("Next Parent Page clicked with parentPage = " + parentPage);

    if (parentPage < 3) {
      setParentPage(parentPage + 1);
    } else {
      setParentPage(1);
    }
  };

  return (
    <Container>
      <button onClick={toggleComponent}>Next Page Parent</button>

      <PageFlipApp
        parentPage={parentPage}
        previousPage={parentPage - 1}
        setParentPage={updateParentPage}
      />
    </Container>
  );
};

export default Book;
