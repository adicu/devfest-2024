import React, { useState } from "react";
import styled from "@emotion/styled";

import Page from "./Page";

export const TransitionContainer = styled.div`
  position: relative;
  width: 300px; /* Adjust the width as needed */
  height: 300px; /* Adjust the height as needed */
`;

// export const ComponentAWrapper = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   opacity: ${({ visible }) => (visible ? 1 : 0)};
//   transition: opacity 0.5s ease-in-out;
// `;

// export const ComponentBWrapper = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   opacity: ${({ visible }) => (visible ? 1 : 0)};
//   transition: opacity 0.5s ease-in-out;
// `;

export const PageWrapper = styled.div`
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
    <div>
      <button onClick={toggleComponent}>Next Page</button>
      <TransitionContainer>
        <PageWrapper visible={currentPage == 1}>
          <Page pageNumber="1">Component A</Page>
        </PageWrapper>
        <PageWrapper visible={currentPage == 2}>
          <Page pageNumber="2">Component B</Page>
        </PageWrapper>
        <PageWrapper visible={currentPage == 3}>
          <Page pageNumber="3">Component C</Page>
        </PageWrapper>
      </TransitionContainer>
    </div>
  );
};

export default PageFlipApp;
