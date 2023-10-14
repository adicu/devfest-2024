import Head from "next/head";
import styled from "@emotion/styled";
import { useState, useEffect } from "react";

import Book from "../components/Book";
import Sidepane from "../components/Sidepane";
import Header from "../components/Header";

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
            <Header />
          </HeaderWrapper>
          <MainContentWrapper>
            <Sidepane />
            <Book />
          </MainContentWrapper>
        </HomePageContainer>
      </main>
    </>
  );
}
