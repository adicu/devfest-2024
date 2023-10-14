import React, { useState } from "react";
import styled from "@emotion/styled";

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1200px;
`;

const Page = styled.div`
  width: 300px;
  height: 400px;
  background-color: #fff;
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  transition: transform 0.5s ease;
  transform-style: preserve-3d;

  &.active {
    transform: rotateY(0deg);
  }

  &:nth-child(2) {
    transform: rotateY(180deg);
  }
`;

const ButtonContainer = styled.div`
  background-color: red;
  /* display: flex;
  justify-content: center; */
  margin-top: 20px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 0 10px;
  cursor: pointer;
`;

const PageFlipApp = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const nextPage = () => {
    if (currentPage < 3) {
      setCurrentPage(currentPage + 1);
    }
  };

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <PageContainer>
        <Page className={currentPage === 1 ? "active" : ""}>
          {/* Content for Page 1 */}
          <p>Page 1</p>
        </Page>
        <Page className={currentPage === 2 ? "active" : ""}>
          {/* Content for Page 2 */}
          <p>Page 2</p>
        </Page>
        <Page className={currentPage === 3 ? "active" : ""}>
          {/* Content for Page 3 */}
          <p>Page 3</p>
        </Page>
      </PageContainer>
      <ButtonContainer>
        <Button onClick={previousPage}>Previous Page</Button>
        <Button onClick={nextPage}>Next Page</Button>
      </ButtonContainer>
    </>
  );
};

export default PageFlipApp;
