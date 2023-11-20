import React, { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "@emotion/styled";

import { createUseStyles } from "react-jss";

import Pages from "../Pages";

import Page from "./Page";

import leftArrow from "../../../public/images/icons/left-arrow.svg";
import rightArrow from "../../../public/images/icons/right-arrow.svg";

const colorBook = "#F5F5F5";
const colorSpine = "black";
const delay = 150;

const Container = styled.div`
  height: 100%;
  width: 100%;

  padding: 1em;
  display: flex;
  flex-direction: column;
`;

const Book = styled.div`
  position: relative;
  background-color: ${colorBook};

  top: 0%;
  height: 100%;
  flex: 7;

  width: 100%;

  border: ${colorSpine} solid 2px;
  box-shadow: 10px 10px black;
`;

const Arrows = styled.div`
  flex: 1;
  height: 100%;
  margin-top: 1em;

  display: flex;

  height: 100%;
  width: 100%;
`;

const LeftArrow = styled.div`
  flex: 1;

  height: 100%;
  align-items: center;
  position: relative;
  background-image: url(${leftArrow.src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const RightArrow = styled.div`
  flex: 1;

  height: 100%;
  align-items: center;
  position: relative;
  background-image: url(${rightArrow.src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
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
      forward ? "translateX(0)" : "translateX(-100%)",
  },
  pagerightEnterActive: {
    transform: ({ forward }) => (forward ? "translateX(0)" : "translateX(0)"),
    transition: `all ${delay}ms ease-in-out`,
  },
  pagerightExit: {
    zIndex: ({ forward }) => (forward ? 104 : 103),
    transformOrigin: ({ forward }) => (forward ? "left center" : "left center"),
    transform: ({ forward }) => (forward ? "translateX(0)" : "translateX(0)"),
  },
  pagerightExitActive: {
    transform: ({ forward }) =>
      forward ? "translateX(-100%)" : "translateX(0)",
    transition: `all ${delay}ms ease-in-out`,
  },
});

const MobilePageFlipApp = (props) => {
  const pages = Pages(
    props.data,
    props.updatePage,
    props.pageDictionary,
    props.mobile
  );

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
    if (currentPage < pages.length * 2) {
      props.updatePage(currentPage + 1);
    }
  }

  return (
    <>
      <Container>
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
                  maxPage={pages.length * 2}
                  pageNumber={currentPage}
                  left={false}
                  goLeft={goLeft}
                  goRight={goRight}
                >
                  {
                    pages[Math.floor((currentPage + 1) / 2) - 1][
                      Math.abs((currentPage % 2) - 1)
                    ]
                  }
                </Page>
              </RightPage>
            </CSSTransition>
          </TransitionGroup>
        </Book>
        <Arrows>
          <LeftArrow onClick={goLeft} />
          <RightArrow onClick={goRight} />
        </Arrows>
      </Container>
    </>
  );
};

export default MobilePageFlipApp;
