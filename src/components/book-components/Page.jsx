import styled from "@emotion/styled";

const colorPage = "#F0E7E2";

const pagePadding = "2rem";
const pagePaddingMobile = "0.3rem";

const Page = (props) => {
  const Container = styled.div`
    background-color: ${colorPage};
    height: 100%;
    width: 100%;
    user-select: none;

    padding: 0;
    margin: 0;

    overflow-y: scroll;
    overflow-x: hidden;
    scrollbar-width: none;

    ::-webkit-scrollbar {
      display: none;
    }
  `;

  function divClicked() {
    if (props.mobile == false) {
      if (props.left == true) {
        props.goLeft();
      } else {
        props.goRight();
      }
    }
  }

  const NextPageMessage = styled.div`
    position: absolute;
    right: 0;
    top: 0;

    color: black;

    padding: 0.1rem;

    border: 1px solid #888;

    background-color: #f1f0ef;

    font-size: 1.3vw;

    z-index: 1;

    @media (max-width: ${process.env.mobileWidth}) {
      display: none;
    }

    :hover {
      cursor: pointer;
    }
  `;

  const PreviousPageMessage = styled.div`
    position: absolute;
    left: 0;
    top: 0;

    color: black;

    padding: 0.1rem;

    border: 1px solid #888;

    background-color: #f1f0ef;

    font-size: 1.3vw;

    z-index: 1;

    @media (max-width: ${process.env.mobileWidth}) {
      display: none;
    }

    :hover {
      cursor: pointer;
    }
  `;

  const RelativeDiv = styled.div`
    position: relative;
  `;

  const Padding = styled.div`
    margin: 0;
    width: 100%;
    height: 100%;
    padding: ${pagePadding};
    @media (max-width: ${process.env.mobileWidth}) {
      padding: ${pagePaddingMobile};
    }
  `;

  return (
    <>
      <Container onClick={divClicked}>
        {props.mobile ||
        props.pageNumber == 1 ||
        props.pageNumber == props.maxPage ? (
          <></>
        ) : (
          <RelativeDiv>
            {props.left ? (
              <PreviousPageMessage>{"ᐊ--"}</PreviousPageMessage>
            ) : (
              <NextPageMessage>{"--ᐅ"}</NextPageMessage>
            )}
          </RelativeDiv>
        )}
        <Padding>{props.children}</Padding>
      </Container>
    </>
  );
};

export default Page;
