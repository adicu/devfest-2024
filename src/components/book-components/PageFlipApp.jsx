import React, { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "@emotion/styled";

import { createUseStyles } from "react-jss";

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

const useStyles = createUseStyles({
  pageleftEnter: {
    zIndex: ({ forward }) => (forward ? 105 : 105),
    transformOrigin: ({ forward }) =>
      forward ? "right center" : "left center",
    transform: ({ forward }) =>
      forward
        ? "perspective(1200px) rotateY(90deg)"
        : "perspective(1200px) rotateY(90deg)",
  },
  pageleftEnterActive: {
    transform: ({ forward }) =>
      forward
        ? "perspective(1200px) rotateY(0deg)"
        : "perspective(1200px) rotateY(0deg)",
    transition: "all 1000ms ease-in-out",
    transitionDelay: ({ forward }) => (forward ? "1000ms" : "0ms"),
  },
  pageleftExit: {
    zIndex: ({ forward }) => (forward ? 102 : 102),
    transformOrigin: ({ forward }) =>
      forward ? "left center" : "right center",
    transform: ({ forward }) =>
      forward
        ? "perspective(1200px) rotateY(0deg)"
        : "perspective(1200px) rotateY(0deg)",
  },
  pageleftExitActive: {
    transform: ({ forward }) =>
      forward
        ? "perspective(1200px) rotateY(0deg)"
        : "perspective(1200px) rotateY(0deg)",
    transition: "all 1000ms ease-in-out",
  },
  pagerightEnter: {
    zIndex: ({ forward }) => (forward ? 103 : 103),
    transformOrigin: ({ forward }) => (forward ? "left center" : "left center"),
    transform: ({ forward }) =>
      forward
        ? "perspective(1200px) rotateY(0deg)"
        : "perspective(1200px) rotateY(0deg)",
  },
  pagerightEnterActive: {
    transform: ({ forward }) =>
      forward
        ? "perspective(1200px) rotateY(0deg)"
        : "perspective(1200px) rotateY(0deg)",
    transition: "all 1000ms ease-in-out",
  },
  pagerightExit: {
    zIndex: ({ forward }) => (forward ? 104 : 104),
    transformOrigin: ({ forward }) => (forward ? "left center" : "left center"),
    transform: ({ forward }) =>
      forward
        ? "perspective(1200px) rotateY(0deg)"
        : "perspective(1200px) rotateY(0deg)",
  },
  pagerightExitActive: {
    transform: ({ forward }) =>
      forward
        ? "perspective(1200px) rotateY(-90deg)"
        : "perspective(1200px) rotateY(-90deg)",
    transition: "all 1000ms ease-in-out",
  },
});

const PageFlipApp = (props) => {
  // useEffect(() => {
  //   setCurrentPage(props.parentPage);
  // }, [props.parentPage]);

  const [currentPage, setCurrentPage] = useState(props.previousPage);

  const [forward, setForward] = useState(true);

  const classes = useStyles({ forward });

  function nextPage() {
    setForward(true);
    setCurrentPage(currentPage + 1);
  }

  function lastPage() {
    setForward(false);
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
              classNames={{
                enter: classes.pageleftEnter,
                enterActive: classes.pageleftEnterActive,
                exit: classes.pageleftExit,
                exitActive: classes.pageleftExitActive,
              }}
            >
              <LeftPage>
                <Page> {pages[currentPage - 1][0]}</Page>
              </LeftPage>
            </CSSTransition>

            <CSSTransition
              key={currentPage}
              timeout={2000}
              classNames={{
                enter: classes.pagerightEnter,
                enterActive: classes.pagerightEnterActive,
                exit: classes.pagerightExit,
                exitActive: classes.pagerightExitActive,
              }}
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
