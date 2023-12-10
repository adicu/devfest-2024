import styled from "@emotion/styled";

const colorPage = "#F0E7E2";

const Page = (props) => {
  const Container = styled.div`
    background-color: ${colorPage};
    height: 100%;
    width: 100%;
    user-select: none;

    padding: 1rem;
    @media (max-width: ${process.env.mobileWidth}) {
      padding: 0;
    }

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

  return <Container onClick={divClicked}>{props.children}</Container>;
};

export default Page;
