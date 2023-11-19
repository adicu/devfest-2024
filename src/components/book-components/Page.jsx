import styled from "@emotion/styled";

const colorPage = "#F5F5F5";

const Page = (props) => {
  const Container = styled.div`
    background-color: ${colorPage};
    height: 100%;
    width: 100%;
    user-select: none;
  `;

  function divClicked() {
    if (props.left == true) {
      props.goLeft();
    } else {
      props.goRight();
    }
  }

  return <Container onClick={divClicked}>{props.children}</Container>;
};

export default Page;
