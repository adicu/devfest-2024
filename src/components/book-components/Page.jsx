import styled from "@emotion/styled";

const colorPage = "white";

const Page = (props) => {
  const Container = styled.div`
    background-color: ${colorPage};
    height: 100%;
    width: 100%;

    pointer-events: ${props.visible ? "all" : "none"};
  `;

  function leftPageClicked() {
    const currentPage = props.pageNumber;

    const curPageDiv = Math.floor((currentPage - 1) / 2) + 1;

    if (curPageDiv > 1) {
      if (currentPage % 2 == 0) {
        props.updatePage(currentPage - 2);
      } else {
        props.updatePage(currentPage - 1);
      }
    }
  }

  function rightPageClicked() {
    const currentPage = props.pageNumber;

    const maxPageDiv = Math.floor((props.maxPage - 1) / 2) + 1;

    const curPageDiv = Math.floor((currentPage - 1) / 2) + 1;

    if (curPageDiv < maxPageDiv) {
      if (currentPage % 2 == 0) {
        props.updatePage(currentPage + 1);
      } else {
        props.updatePage(currentPage + 2);
      }
    }
  }

  function divClicked() {
    if (props.pageNumber % 2 == 1) {
      leftPageClicked();
    } else {
      rightPageClicked();
    }
  }

  return <Container onClick={divClicked}>{props.children}</Container>;
};

export default Page;
