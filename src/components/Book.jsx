import styled from "@emotion/styled";
import { useState } from "react";
import PageFlipApp from "./book-components/PageFlipApp";

const Book = ({ data, mobile }) => {
  const Container = styled.div`
    background-color: lightblue;
    flex: 3;
  `;

  // const Temp = styled.div`
  //   background-color: red;
  // `;

  const [parentPage, setParentPage] = useState(1);

  // let parentPage = 1;

  function setParentPageMine(newVal) {
    console.log("Old parent page " + parentPage);

    // parentPage = newVal;
    setParentPage(newVal);
    console.log("New parent page " + parentPage);
  }

  const toggleComponent = () => {
    console.log("Next Parent Page clicked with parentPage = " + parentPage);

    if (parentPage < 3) {
      // setCurrentPage(currentPage + 1);
      // props.setParentPage(currentPage + 1);

      // parentPage = parentPage + 1;
      setParentPage(parentPage + 1);
    } else {
      // setCurrentPage(1);
      // props.setParentPage(1);

      // parentPage = 1;
      setParentPage(1);
    }
  };

  return (
    <Container>
      <button onClick={toggleComponent}>Next Page Parent</button>

      <PageFlipApp parentPage={parentPage} setParentPage={setParentPageMine} />
    </Container>
  );
};

export default Book;
