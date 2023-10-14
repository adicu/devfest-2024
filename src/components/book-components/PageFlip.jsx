import React, { useState } from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const flipAnimation = keyframes`
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(180deg);
  }
`;

const Page = styled.div`
  width: 100%;
  height: 100%;
  perspective: 1000px;
`;

const PageFlipContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.5s;
  animation: ${({ isFlipped }) => (isFlipped ? flipAnimation : "none")} 0.5s;
  transform: ${({ isFlipped }) => (isFlipped ? "rotateY(180deg)" : "none")};
`;

const Page1 = styled.div`
  background-color: red;
`;

const Page2 = styled.div`
  /* Styles for Page 2 */
  background-color: yellow;
`;

const PageFlip = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handlePageFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Page>
      <PageFlipContainer isFlipped={isFlipped}>
        <Page1>
          {/* Content of Page 1 */}
          <p>Hello there</p>
          <button onClick={handlePageFlip}>Next Page</button>
        </Page1>
        <Page2>
          {/* Content of Page 2 */}
          <p>General Kenobi</p>
          <button onClick={handlePageFlip}>Previous Page</button>
        </Page2>
      </PageFlipContainer>
    </Page>
  );
};

export default PageFlip;
