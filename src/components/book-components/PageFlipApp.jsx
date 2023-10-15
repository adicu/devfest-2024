import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

import { pages } from "../Pages";

import Page from "./Page";

const PageDiv = styled.div`
  z-index: ${({ zIndex }) => zIndex};

  position: absolute;
  background-color: white;
  width: 330px;
  height: 430px;
  border-radius: 0 15px 15px 0;
  margin-top: 10px;
  transform-origin: left;
  transform-style: preserve-3d;
  transform: rotateY(0deg);
  transition-duration: 1.5s;

  ${({ checked }) => (!checked ? "1s" : "0s")} ease-in-out;
`;

const LeftPage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  box-sizing: border-box;
  padding: 1rem;
`;

const RightPage = styled.div`
  transform: rotateY(180deg);
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  z-index: 99;
`;

const Cover = styled.div`
  background-color: #4173a5;
  width: 100%;
  height: 100%;
  border-radius: 0 15px 15px 0;
  box-shadow: 0 0 5px rgb(41, 41, 41);
  display: flex;
  align-items: center;
  justify-content: center;
  transform-origin: center left;
  position: absolute;
  z-index: 4;
  transition: transform 1s;
`;

const BackCover = styled.div`
  background-color: #4173a5;
  width: 100%;
  height: 100%;
  border-radius: 0 15px 15px 0;
  box-shadow: 0 0 5px rgb(41, 41, 41);
  display: flex;
  align-items: center;
  justify-content: center;
  transform-origin: center left;
  position: relative;
  z-index: -1;
`;

const Book = styled.div`
  width: 350px;
  height: 450px;
  position: relative;
  transition-duration: 1s;
  perspective: 1500;
`;

const PageFlipApp = (props) => {
  // useEffect(() => {
  //   setCurrentPage(props.parentPage);
  // }, [props.parentPage]);

  const [currentPage, setCurrentPage] = useState(props.previousPage);

  return (
    <>
      <button>Next Page</button>
      <Book>
        <Cover />
        {pages.map((page, index) => {
          const pageNum = index + 1;

          return (
            <PageDiv key={pageNum} zIndex={200 - pageNum}>
              <LeftPage>
                <Page>{page[0]}</Page>
              </LeftPage>

              <RightPage>
                <Page>{page[1]}</Page>
              </RightPage>
            </PageDiv>
          );
        })}
        <BackCover />
      </Book>
    </>
  );
};

export default PageFlipApp;
