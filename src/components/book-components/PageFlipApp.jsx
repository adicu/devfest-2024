import React, { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "@emotion/styled";

import { pages } from "../Pages";

import Page from "./Page";

// import "../../styles/transitions.css";

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

// const PageDiv = styled.div`
//   background-color: yellow;
//   height: 100%;
//   width: 100%;
//   position: absolute;
//   top: 0;
//   left: 0;
//   transform: perspective(1000px)
//     rotateY(${({ visible }) => (visible ? 0 : -90)}deg);
//   transition: transform 2s ease-in-out, z-index 0.5s 0.5s, opacity 0.5s 0.5s;
//   opacity: ${({ visible }) => (visible ? 1 : 0)};
//   z-index: ${({ visible }) => (visible ? 1000 : 999)};
//   backface-visibility: hidden;
// `;

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

  // function getVisible(pageNum) {
  //   if (pageNum % 2 == 0) {
  //     return currentPage == pageNum - 1 || currentPage == pageNum;
  //   } else {
  //     return currentPage == pageNum || currentPage == pageNum + 1;
  //   }
  // }

  // const lengthOfPages = pages.length;

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
          {/* {pages.map((page, index) => {
            const pageNum = index + 1;
            // const pageLeft = pageNum % 2 == 1 ? true : false;
            // const visible = getVisible(pageNum);

            return (
              <PageDiv key={pageNum} visible={currentPage == pageNum}>
                <LeftPage>
                  <Page>{page[0]}</Page>
                </LeftPage>
                <RightPage>
                  <Page>{page[1]}</Page>
                </RightPage>
              </PageDiv>
            );
          })} */}

          {/* <PageDiv> */}

          <TransitionGroup>
            <CSSTransition
              key={currentPage}
              timeout={1000}
              classNames="pageflip"
            >
              <PageDiv>
                <LeftPage>
                  <Page> {pages[currentPage - 1][0]}</Page>
                </LeftPage>
                <RightPage>
                  <Page> {pages[currentPage - 1][1]}</Page>
                </RightPage>
              </PageDiv>
            </CSSTransition>
          </TransitionGroup>

          {/* </PageDiv> */}
        </Book>
      </Container>
    </>
  );
};

export default PageFlipApp;
