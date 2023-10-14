import React, { useState } from "react";
import styled from "@emotion/styled";

export const TransitionContainer = styled.div`
  position: relative;
  width: 300px; /* Adjust the width as needed */
  height: 300px; /* Adjust the height as needed */
`;

export const ComponentAWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
`;

export const ComponentBWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
`;

const TransitionComponent = () => {
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
        <ComponentAWrapper visible={currentPage == 1}>
          Component A
        </ComponentAWrapper>
        <ComponentBWrapper visible={currentPage == 2}>
          Component B
        </ComponentBWrapper>
        <ComponentBWrapper visible={currentPage == 3}>
          Component C
        </ComponentBWrapper>
      </TransitionContainer>
    </div>
  );
};

export default TransitionComponent;
