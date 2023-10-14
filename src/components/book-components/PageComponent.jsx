import React from "react";
import styled from "@emotion/styled";

const Page = styled.div`
  width: 200px; /* Adjust the width to your preference */
  height: 300px; /* Adjust the height to your preference */
  background-color: #fff;
  position: relative;
  border: 1px solid #ddd;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const CurlEffect = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  background: linear-gradient(-45deg, transparent 10px, #fff 10px);
  top: 10px;
  left: 10px;
  transform: translateX(100%);
  transform-origin: 0 0;
  pointer-events: none;
`;

const PageComponent = () => {
  return (
    <Page>
      <CurlEffect />
      {/* Content of the page */}
      <p>This page is nice</p>
    </Page>
  );
};

export default PageComponent;
