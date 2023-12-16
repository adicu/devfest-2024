import Head from "next/head";
import styled from "@emotion/styled";
import { useState, useEffect } from "react";

import Book from "../components/Book";
import Sidepane from "../components/Sidepane";
import Header from "../components/Header";

import { getPageDictionary } from "../components/Pages";

export async function getServerSideProps() {
  try {
    const res = await fetch(process.env.DATA_URL);
    const data = await res.json();
    return { props: { data } };
  } catch (err) {
    const data = {
      Workshops: [],
      Instructors: [],
      Events: [],
      Speakers: [],
    };
    return { props: { data } };
  }
}

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  margin: 1%;
`;

const HeaderWrapper = styled.div`
  flex: 0;
`;

const MainContentWrapper = styled.div`
  flex: 1;
  display: flex;
  margin: 1rem;

  flex-direction: row;
  @media (max-width: ${process.env.mobileWidth}) {
    flex-direction: column;
    margin: 5px;
  }
`;

export default function Home({ data }) {
  // Suppress JSS warnings
  if (typeof window === "undefined") {
    const originalWarn = console.warn;
    console.warn = (...args) => {
      if (
        args[0] !==
        'Warning: [JSS] Rule is not linked. Missing sheet option "link: true".'
      ) {
        originalWarn(...args);
      }
    };
  }

  const pageDictionary = getPageDictionary(data);
  const pageTitles = getPageDictionary(data, true);
  const pageDictionaryDesktop = getPageDictionary(data, true, true);

  const [currentPage, setCurrentPage] = useState(1);
  const [previousPage, setPreviousPage] = useState(1);

  const updatePage = (newPage) => {
    setPreviousPage(currentPage);
    setCurrentPage(newPage);
  };

  return (
    <>
      <Head>
        <title>DevFest 24 by ADI</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HomePageContainer>
          <HeaderWrapper className="mobile-hidden">
            <Header
              pageDictionary={pageDictionary}
              pageTitles={pageTitles}
              currentPage={currentPage}
              pageDictionaryDesktop={pageDictionaryDesktop}
              previousPage={previousPage}
              updatePage={updatePage}
              mobile={false}
            />
          </HeaderWrapper>
          <HeaderWrapper className="mobile-shown">
            <Header
              pageDictionary={pageDictionary}
              pageTitles={pageTitles}
              currentPage={currentPage}
              pageDictionaryDesktop={pageDictionaryDesktop}
              previousPage={previousPage}
              updatePage={updatePage}
              mobile={true}
            />
          </HeaderWrapper>
          <MainContentWrapper>
            <Sidepane
              pageDictionary={pageDictionary}
              currentPage={currentPage}
              previousPage={previousPage}
              updatePage={updatePage}
            />
            <Book
              data={data}
              pageDictionary={pageDictionary}
              currentPage={currentPage}
              previousPage={previousPage}
              updatePage={updatePage}
            />
          </MainContentWrapper>
        </HomePageContainer>
      </main>
    </>
  );
}
