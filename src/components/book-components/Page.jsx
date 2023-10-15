import styled from "@emotion/styled";

const colorPage = "white";

const Page = (props) => {
  const Container = styled.div`
    background-color: ${colorPage};
    height: 100%;
    width: 100%;
  `;

  function divClicked() {
    if (props.left == true) {
      if (props.pageNumber > 1) {
        props.updatePage(props.pageNumber - 1);
      }
    } else {
      if (props.pageNumber < props.maxPage) {
        props.updatePage(props.pageNumber + 1);
      }
    }
  }

  return <Container onClick={divClicked}>{props.children}</Container>;
};

export default Page;
