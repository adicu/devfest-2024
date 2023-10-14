import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

import Pages from "../Pages";

const colorBook = "brown";
const colorSpine = "black";

const Container = styled.div`
  height: 100%;
  width: 100%;

  padding: 1em;
`;

const Book = styled.div`
  position: relative;
  background-color: ${colorBook};

  height: 100%;
  width: 100%;

  border-radius: 3px;
`;

export const LeftPage = styled.div`
  height: 100%;
  width: 50%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: opacity 2s ease-in-out;

  padding-top: 1em;
  padding-bottom: 1em;

  border-right: solid ${colorSpine} 1px;
  padding-left: 1em;

  pointer-events: none;
`;

export const RightPage = styled.div`
  height: 100%;
  width: 50%;
  position: absolute;
  top: 0;
  left: 50%;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: opacity 2s ease-in-out;

  padding-top: 1em;
  padding-bottom: 1em;

  border-left: solid ${colorSpine} 1px;
  padding-right: 1em;

  pointer-events: none;
`;

// export const Page = styled.div`
//   background-color: ${colorPage};
//   height: 100%;
//   width: 100%;
// `;

const PageFlipApp = (props) => {
  useEffect(() => {
    setCurrentPage(props.parentPage);
  }, [props.parentPage]);

  const [currentPage, setCurrentPage] = useState(props.previousPage);

  function leftPageClicked() {
    console.log("Left page clicked");
  }

  function rightPageClicked() {
    console.log("Right page clicked");
  }

  const Clicker = styled.div`
    width: 100%;
    height: 100%;
    pointer-events: all;
  `;

  return (
    <>
      <Container>
        <Book>
          <LeftPage visible={false}>
            <Clicker onClick={leftPageClicked}>Left Clicker</Clicker>
          </LeftPage>

          <RightPage visible={false}>
            <Clicker onClick={rightPageClicked}>Right Clicker</Clicker>
          </RightPage>

          <Pages currentPage={currentPage} updatePage={props.updatePage} />
        </Book>
      </Container>
    </>
  );
};

export default PageFlipApp;
