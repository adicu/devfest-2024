import React, { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "@emotion/styled";

import { pages } from "../Pages";

import Page from "./Page";

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

const PageDiv = styled.div`
  background-color: yellow;
`;

export const LeftPage = styled.div`
  height: 100%;
  background-color: violet;
  width: 50%;
  position: absolute;
  left: 0;
`;

export const RightPage = styled.div`
  height: 100%;
  background-color: orange;
  width: 50%;
  position: absolute;
  left: 50%;
`;

const PageFlipApp = (props) => {
  // useEffect(() => {
  //   setCurrentPage(props.parentPage);
  // }, [props.parentPage]);

  const [currentPage, setCurrentPage] = useState(props.previousPage);

  function nextPage() {
    setCurrentPage(currentPage + 1);
  }

  function lastPage() {
    setCurrentPage(currentPage - 1);
  }

  return (
    <>
      <Container>
        <button onClick={lastPage}>Previous</button>
        <button onClick={nextPage}>Next</button>

        <Book>
          <TransitionGroup>
            <CSSTransition
              key={currentPage + pages.length}
              timeout={2000}
              classNames="pageleft"
            >
              <LeftPage>
                <Page> {pages[currentPage - 1][0]}</Page>
              </LeftPage>
            </CSSTransition>

            <CSSTransition
              key={currentPage}
              timeout={2000}
              classNames="pageright"
            >
              <RightPage>
                <Page> {pages[currentPage - 1][1]}</Page>
              </RightPage>
            </CSSTransition>
          </TransitionGroup>
        </Book>
      </Container>
    </>
  );
};

export default PageFlipApp;
