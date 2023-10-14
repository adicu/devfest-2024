import React, { useState } from "react";
import styled from "@emotion/styled";

import Page from "./Page";

// const Book = styled.div`
//   background-color: green;
//   height: 100%;
// `;

const PagesContainer = styled.div`
  position: relative;
  background-color: yellow;

  height: 100%;
`;

const PageWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
`;

const PageFlipApp = () => {
  const MAX_PAGE = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const toggleComponent = () => {
    if (currentPage < MAX_PAGE) {
      setCurrentPage(currentPage + 1);
    } else {
      setCurrentPage(1);
    }
  };

  return (
    <>
      <button onClick={toggleComponent}>Next Page</button>
      {/* <Book> */}
      <PagesContainer>
        <PageWrapper visible={currentPage == 1}>
          <Page pageNumber="1">Component A</Page>
        </PageWrapper>
        <PageWrapper visible={currentPage == 2}>
          <Page pageNumber="2">Component B</Page>
        </PageWrapper>
        <PageWrapper visible={currentPage == 3}>
          <Page pageNumber="3">Component C</Page>
        </PageWrapper>
      </PagesContainer>
      {/* </Book> */}
    </>
  );
};

export default PageFlipApp;
