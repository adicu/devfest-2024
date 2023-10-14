import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

import Pages, { maxPage } from "../Pages";

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
  transition: opacity 0.5s ease-in-out;

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
  transition: opacity 0.5s ease-in-out;

  padding-top: 1em;
  padding-bottom: 1em;

  border-left: solid ${colorSpine} 1px;
  padding-right: 1em;

  pointer-events: none;
`;

const PageFlipApp = (props) => {
  useEffect(() => {
    setCurrentPage(props.parentPage);
  }, [props.parentPage]);

  const [currentPage, setCurrentPage] = useState(props.previousPage);

  function leftPageClicked() {
    console.log("Left page clicked");

    const curPageDiv = Math.floor((currentPage - 1) / 2) + 1;

    if (curPageDiv > 1) {
      if (currentPage % 2 == 0) {
        props.updatePage(currentPage - 2);
      } else {
        props.updatePage(currentPage - 1);
      }
    }
  }

  function rightPageClicked() {
    console.log("Right page clicked");

    const maxPageDiv = Math.floor((maxPage - 1) / 2) + 1;

    const curPageDiv = Math.floor((currentPage - 1) / 2) + 1;

    if (curPageDiv < maxPageDiv) {
      if (currentPage % 2 == 0) {
        props.updatePage(currentPage + 1);
      } else {
        props.updatePage(currentPage + 2);
      }
    }
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

          <Pages
            currentPage={currentPage}
            updatePage={props.updatePage}
            leftPageClicked={leftPageClicked}
          />
        </Book>
      </Container>
    </>
  );
};

export default PageFlipApp;
