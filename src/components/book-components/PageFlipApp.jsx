import React, { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "@emotion/styled";

import { createUseStyles } from "react-jss";

import { pages } from "../Pages";

import Page from "./Page";

const colorBook = "brown";
const colorSpine = "black";
const delay = 200;

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

  border-radius: 5px;
`;

// const PageDiv = styled.div`
//   background-color: yellow;
// `;

export const LeftPage = styled.div`
  height: 100%;
  width: 50%;
  position: absolute;
  left: 0;

  padding-top: 1em;
  padding-bottom: 1em;

  padding-left: 1em;
`;

export const RightPage = styled.div`
  height: 100%;
  width: 50%;
  position: absolute;
  left: 50%;

  padding-top: 1em;
  padding-bottom: 1em;

  padding-right: 1em;
`;

const useStyles = createUseStyles({
  pageleftEnter: {
    zIndex: ({ forward }) => (forward ? 105 : 102),
    transformOrigin: ({ forward }) =>
      forward ? "right center" : "right center",
    transform: ({ forward }) =>
      forward
        ? "perspective(1200px) rotateY(90deg)"
        : "perspective(1200px) rotateY(0deg)",
  },
  pageleftEnterActive: {
    transform: ({ forward }) =>
      forward
        ? "perspective(1200px) rotateY(0deg)"
        : "perspective(1200px) rotateY(0deg)",
    transition: `all ${delay}ms ease-in-out`,
    transitionDelay: ({ forward }) => (forward ? `${delay}ms` : "0ms"),
  },
  pageleftExit: {
    zIndex: ({ forward }) => (forward ? 102 : 105),
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
        : "perspective(1200px) rotateY(90deg)",
    transition: `all ${delay}ms ease-in-out`,
  },
  pagerightEnter: {
    zIndex: ({ forward }) => (forward ? 103 : 104),
    transformOrigin: ({ forward }) => (forward ? "left center" : "left center"),
    transform: ({ forward }) =>
      forward
        ? "perspective(1200px) rotateY(0deg)"
        : "perspective(1200px) rotateY(-90deg)",
  },
  pagerightEnterActive: {
    transform: ({ forward }) =>
      forward
        ? "perspective(1200px) rotateY(0deg)"
        : "perspective(1200px) rotateY(0deg)",
    transition: `all ${delay}ms ease-in-out`,
    transitionDelay: ({ forward }) => (forward ? `0ms` : `${delay}ms`),
  },
  pagerightExit: {
    zIndex: ({ forward }) => (forward ? 104 : 103),
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
        : "perspective(1200px) rotateY(0deg)",
    transition: `all ${delay}ms ease-in-out`,
  },
});

const PageFlipApp = (props) => {
  useEffect(() => {
    setCurrentPage(props.parentPage);

    console.log("Parent Page " + props.parentPage);

    console.log("CURRENT Page " + currentPage);

    if (props.previousPage < props.parentPage) {
      setForward(true);
    } else {
      setForward(false);
    }
  }, [props.parentPage]);

  const [currentPage, setCurrentPage] = useState(props.previousPage);

  const [forward, setForward] = useState(true);

  const classes = useStyles({ forward });

  // function nextPage() {
  //   setForward(true);
  //   setCurrentPage(currentPage + 1);
  // }

  // function lastPage() {
  //   setForward(false);
  //   setCurrentPage(currentPage - 1);
  // }

  return (
    <>
      <Container>
        {/* <button onClick={lastPage}>Previous</button>
        <button onClick={nextPage}>Next</button> */}

        <Book>
          <TransitionGroup>
            <CSSTransition
              key={currentPage + pages.length}
              timeout={delay * 2}
              classNames={{
                enter: classes.pageleftEnter,
                enterActive: classes.pageleftEnterActive,
                exit: classes.pageleftExit,
                exitActive: classes.pageleftExitActive,
              }}
            >
              <LeftPage>
                <Page
                  updatePage={props.updatePage}
                  maxPage={pages.length}
                  pageNumber={currentPage}
                  left={true}
                >
                  {pages[currentPage - 1][0]}
                </Page>
              </LeftPage>
            </CSSTransition>

            <CSSTransition
              key={currentPage}
              timeout={delay * 2}
              classNames={{
                enter: classes.pagerightEnter,
                enterActive: classes.pagerightEnterActive,
                exit: classes.pagerightExit,
                exitActive: classes.pagerightExitActive,
              }}
            >
              <RightPage>
                <Page
                  updatePage={props.updatePage}
                  maxPage={pages.length}
                  pageNumber={currentPage}
                  left={false}
                >
                  {pages[currentPage - 1][1]}
                </Page>
              </RightPage>
            </CSSTransition>
          </TransitionGroup>
        </Book>
      </Container>
    </>
  );
};

export default PageFlipApp;
