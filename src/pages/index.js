import Head from "next/head";
import styled from "@emotion/styled";
import Countdown from "react-countdown";

export default function Home() {
  // Month is 0 indexed, everything else isn't (year, monthIndex, day, hour)
  const DEVFEST_DATE = new Date(2024, 1, 28, 19);

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
    justify-content: center;

    background-color: rgb(231, 212, 168);
    width: 20rem;
    min-height: 50vh;
    margin-top: 1em;
    margin-bottom: 1em;
    border-radius: 25px;
    border-style: solid;
    border-color: gray;
  `;

  const DivCountdown = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 2em;

    font-size: 3rem;
    font-weight: 900;
    //background-color: red;
    & * {
      font-family: "Digital";
    }
  `;

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
            <img width="60rem" src="/images/icons/adi-logo.png" />
            <h1>DevFest 2024</h1>
            <h2>Coming soon...</h2>

            <DivCountdown>
              <Countdown date={DEVFEST_DATE} />
            </DivCountdown>

            <a href="https://2023.devfestcu.com/">DevFest 2023</a>
          </DivCenter>
        </DivHero>
      </main>
    </>
  );
}
