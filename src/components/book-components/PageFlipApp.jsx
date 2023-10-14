import React, { useState, useEffect } from "react";
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

  function getVisible(pageNum) {
    if (pageNum % 2 == 0) {
      return currentPage == pageNum - 1 || currentPage == pageNum;
    } else {
      return currentPage == pageNum || currentPage == pageNum + 1;
    }
  }

  const lengthOfPages = pages.length;

  return (
    <>
      <Container>
        <Book>
          {pages.map((page, index) => {
            const pageNum = index + 1;
            const pageLeft = pageNum % 2 == 1 ? true : false;
            const visible = getVisible(pageNum);

            return (
              <React.Fragment key={pageNum}>
                {pageLeft ? (
                  <LeftPage visible={visible}>
                    <Page
                      pageNumber={pageNum}
                      visible={visible}
                      updatePage={props.updatePage}
                      maxPage={lengthOfPages}
                    >
                      {page}
                    </Page>
                  </LeftPage>
                ) : (
                  <RightPage visible={visible}>
                    <Page
                      pageNumber={pageNum}
                      visible={visible}
                      updatePage={props.updatePage}
                      maxPage={lengthOfPages}
                    >
                      {page}
                    </Page>
                  </RightPage>
                )}
              </React.Fragment>
            );
          })}
        </Book>
      </Container>
    </>
  );
};

export default PageFlipApp;
