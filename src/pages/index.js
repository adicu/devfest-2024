import Head from "next/head";
import styled from "@emotion/styled";
import Countdown from "react-countdown";
import { useState, useEffect } from "react";

export default function Home() {
  // Month is 0 indexed, everything else isn't (year, monthIndex, day, hour)
  const DEVFEST_DATE = new Date(2024, 0, 26, 19);

  // Mobile Check
  const maxWidth = "650px";

  const isClientMobile = () => {
    return typeof window !== "undefined" &&
      window.matchMedia(`(max-width: ${maxWidth})`).matches
      ? true
      : false;
  };
  const [mobile, setMobile] = useState(isClientMobile());

  useEffect(() => {
    function handleResize() {
      setMobile(isClientMobile());
    }

    window.addEventListener("resize", handleResize);
  });

  // Styled Components
  const DivHero = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-image: url("/images/hero.jpg");
    background-size: cover;
    background-position: center;
    min-width: 100vw;
    min-height: 100vh;
  `;

  const DivCenter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: rgb(231, 212, 168);
    min-height: 50vh;
    max-width: 95vw;

    margin-top: 1em;
    margin-bottom: 1em;
    margin-left: 5rem;
    margin-right: 5rem;

    padding-left: 2em;
    padding-right: 2em;

    border-radius: 25px;
    border-style: solid;
    border-color: gray;
  `;

  const DivCountdown = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 1em;

    padding-left: 0.2em;
    padding-right: 0.2em;
    padding-bottom: 0.2em;
    margin-top: 0.5em;

    border: solid;
    border-color: gray;
    border-width: 1px;
    border-radius: 5px;

    font-size: ${mobile ? "2.3rem" : "3.5rem"};
    font-weight: 900;
    background-color: black;
    & * {
      font-family: "Digital";
      color: red;
    }
  `;

  const H1 = styled.h1`
    font-size: ${mobile ? "1.9rem" : "4rem"};
    margin-bottom: 2rem;
  `;

  const Img = styled.img`
    margin-top: ${mobile ? "1rem" : "3rem"};
  `;

  const DivLink = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: lightblue;
    color: black;

    border-radius: 15px;

    margin-bottom: 1em;

    & img {
      width: 8rem;
    }

    & p {
      font-family: "DotGothic16";
      font-size: ${mobile ? "1.3rem" : "1.8rem"};
      font-weight: 900;
      padding-left: 0.3em;
      padding-right: 0.3em;
    }
  `;

  const Link = styled.a`
    text-decoration: none;
  `;

  const ContactTextTop = styled.h2`
    font-size: ${mobile ? "1.2rem" : "1.7rem"};
    margin-top: 1.5em;
  `;

  const ContactTextBottom = styled.h2`
    font-size: ${mobile ? "1.2rem" : "1.7rem"};
    margin-bottom: 1.5em;
  `;

  // Body
  return (
    <>
      <Head>
        <title>DevFest 24 by ADI</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <DivHero>
          <DivCenter>
            <Img
              width="100rem"
              src="/images/icons/adi-logo.png"
              alt="ADI Logo"
            />
            <H1>DevFest 2024</H1>
            <h2>Coming soon...</h2>

            <DivCountdown>
              <Countdown date={DEVFEST_DATE} />
            </DivCountdown>

            <ContactTextTop>Questions? Contact</ContactTextTop>
            <ContactTextBottom>devfestcu@gmail.com</ContactTextBottom>

            <h3>Past DevFest Sites:</h3>
            <Link href="https://2023.devfestcu.com/">
              <DivLink>
                <img src="/images/icons/devfest-23.png" alt="DevFest 23 Icon" />
                <p>DevFest 2023</p>
              </DivLink>
            </Link>
          </DivCenter>
        </DivHero>
      </main>
    </>
  );
}
