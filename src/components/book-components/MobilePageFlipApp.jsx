import React, { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "@emotion/styled";

import { createUseStyles } from "react-jss";

import Pages from "../Pages";

import Page from "./Page";

const colorBook = "#F5F5F5";
const colorSpine = "black";
const delay = 75;

const Container = styled.div`
  height: 100%;
  width: 100%;

  padding: 1em;
`;

const Book = styled.div`
  position: relative;
  background-color: ${colorBook};

  top: 0%;
  height: 100%;

  width: 100%;

  border: ${colorSpine} solid 2px;
  box-shadow: 10px 10px black;
`;

export const RightPage = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;

  border-left: ${colorSpine} solid 1px;
`;

const useStyles = createUseStyles({
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

const MobilePageFlipApp = (props) => {
  const pages = Pages(props.data, props.updatePage, props.pageDictionary);

  useEffect(() => {
    setCurrentPage(props.parentPage);

    if (props.previousPage < props.parentPage) {
      setForward(true);
    } else {
      setForward(false);
    }
  }, [props.parentPage]);

  const [currentPage, setCurrentPage] = useState(props.previousPage);

  const [forward, setForward] = useState(true);

  const classes = useStyles({ forward });

  function goLeft() {
    if (currentPage > 1) {
      props.updatePage(currentPage - 1);
    }
  }

  function goRight() {
    if (currentPage < pages.length) {
      props.updatePage(currentPage + 1);
    }
  }

  return (
    <>
      <Container>
        <button onClick={goLeft}>Previous</button>
        <button onClick={goRight}>Next</button>

        <Book>
          <TransitionGroup>
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

export default MobilePageFlipApp;
