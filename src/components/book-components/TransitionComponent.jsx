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
  const [showComponentA, setShowComponentA] = useState(true);

  const toggleComponent = () => {
    setShowComponentA((prev) => !prev);
  };

  return (
    <div>
      <button onClick={toggleComponent}>Toggle Component</button>
      <TransitionContainer>
        <ComponentAWrapper visible={showComponentA}>
          Component A
        </ComponentAWrapper>
        <ComponentBWrapper visible={!showComponentA}>
          Component B
        </ComponentBWrapper>
      </TransitionContainer>
    </div>
  );
};

export default TransitionComponent;
