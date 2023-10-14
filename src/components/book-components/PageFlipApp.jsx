import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

import Page from "./Page";

const Container = styled.div`
  background-color: yellow;
  height: 100%;
  width: 100%;

  padding: 10em;
`;

const Book = styled.div`
  position: relative;
  background-color: brown;

  height: 100%;
  width: 100%;
`;

const PageWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;

  padding: 1em;
`;

const PageFlipApp = (props) => {
  const MAX_PAGE = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const toggleComponent = () => {
    if (currentPage < MAX_PAGE) {
      setCurrentPage(currentPage + 1);

      // console.log("Calling setParentPage " + props.parentPage + " + " + 1);
      props.setParentPage(currentPage + 1);

      // props.parentPage = props.parentPage + 1;
    } else {
      setCurrentPage(1);

      props.setParentPage(1);
      // props.parentPage = 1;
    }
  };

  useEffect(() => {
    // Update the child component's data when parentProp changes
    // setChildData(`New data based on parentProp: ${pr}`);

    setCurrentPage(props.parentPage);
  }, [props.parentPage]);

  return (
    <>
      <Container>
        <button onClick={toggleComponent}>Next Page</button>

        <Book>
          <PageWrapper visible={currentPage == 1}>
            <Page pageNumber="1">Component A</Page>
          </PageWrapper>
          <PageWrapper visible={currentPage == 2}>
            <Page pageNumber="2">Component B</Page>
          </PageWrapper>
          <PageWrapper visible={currentPage == 3}>
            <Page pageNumber="3">Component C</Page>
          </PageWrapper>
        </Book>
      </Container>
    </>
  );
};

export default PageFlipApp;
