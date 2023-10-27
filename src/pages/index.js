import Head from "next/head";
import styled from "@emotion/styled";
import { useState, useEffect } from "react";

import Book from "../components/Book";
import Sidepane from "../components/Sidepane";
import Header from "../components/Header";

import { getPageDictionary } from "../components/book-components/getPageDictionary";

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
  height: 100vh;
`;

const HeaderWrapper = styled.div`
  flex: 0;
`;

const MainContentWrapper = styled.div`
  flex: 1;
  display: flex;
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

  const maxWidth = "650px";

  const isClientMobile = () => {
    return typeof window !== "undefined" &&
      window.matchMedia(`(max-width: ${maxWidth})`).matches
      ? true
      : false;
  };
  const [mobile, setMobile] = useState(isClientMobile());

  useEffect(() => {
    // console.log(data);

    function handleResize() {
      setMobile(isClientMobile());
    }

    window.addEventListener("resize", handleResize);
  });

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
          <HeaderWrapper>
            <Header
              pageDictionary={pageDictionary}
              currentPage={currentPage}
              previousPage={previousPage}
              updatePage={updatePage}
            />
          </HeaderWrapper>
          <MainContentWrapper>
            <Sidepane />
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
