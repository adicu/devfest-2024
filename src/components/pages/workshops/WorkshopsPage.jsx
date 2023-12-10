import styled from "@emotion/styled";

const svgTitleSize = "5.5vw";
const svgTitleSizeMobile = "14vw";
const svgTitleSizeBig = "7rem";

const textSizeMobile = "3vw";
const textSize = "1vw";
const textSizeBig = "1.3rem";

const titleSizeMobile = "4.6vw";
const titleSize = "1.8vw";
const titleSizeBig = "2rem";

const preventDragHandler = (e) => {
  e.preventDefault();
};

const TitleDiv = styled.div`
    position: relative;
    /* margin-left: 1rem; */
    padding-top: 1rem;

     width: ${svgTitleSize};
    //width: 50%;
    text-align: center;
    img {
      height: ${svgTitleSize};
    }

    /* background-color: red; */

    @media (max-width: ${process.env.mobileWidth}) {
      img {
        /* height: 2.3rem; */
        height: ${svgTitleSizeMobile};
      }
    }

    @media (min-width: ${process.env.bigWidth}) {
      img {
        height: ${svgTitleSizeBig};
      }
    }
  `;

const WorkshopsPage = (props) => {
  const NextPageMessage = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    /* margin-right: 0.2rem; */
    /* margin-top: 0.2rem; */
    color: gray;

    /* background-color: red; */

    font-size: 1vw;

    z-index: 1;

    @media (max-width: ${process.env.mobileWidth}) {
      display: none;
    }

    /* background-color: yellow; */
  `;

  const Container = styled.div`
    width: 100%;
    height: 100%;
    user-select: none;
  `;


  return (
      <Container>
        <TitleDiv>
          {/* <NextPageMessage>(Click to advance)</NextPageMessage> */}
          <img
              onDragStart={preventDragHandler}
              src="/images/workshops/workshops_title.svg"
          />
        </TitleDiv>
      </Container>
  );
};

export default WorkshopsPage;
