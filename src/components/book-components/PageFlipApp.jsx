import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

import Pages from "../Pages";

const Container = styled.div`
  background-color: yellow;
  height: 100%;
  width: 100%;

  padding: 1em;
`;

const Book = styled.div`
  position: relative;
  background-color: brown;

  height: 100%;
  width: 100%;
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

  border-right: solid brown 1px;
  padding-left: 1em;
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

  border-left: solid brown 1px;
  padding-right: 1em;
`;

const PageFlipApp = (props) => {
  useEffect(() => {
    setCurrentPage(props.parentPage);
  }, [props.parentPage]);

  const [currentPage, setCurrentPage] = useState(props.previousPage);

  return (
    <>
      <Container>
        <Book>
          <Pages currentPage={currentPage} />
        </Book>
      </Container>
    </>
  );
};

export default PageFlipApp;
