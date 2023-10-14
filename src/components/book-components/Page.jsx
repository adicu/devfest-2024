import styled from "@emotion/styled";

const colorPage = "white";

const Page = (props) => {
  //   console.log(props.active);
  //   console.log(props.active ? "auto" : "none");

  const Container = styled.div`
    background-color: ${colorPage};
    height: 100%;
    width: 100%;

    z-index: "11";
    pointer-events: none;
    /* pointer-events: ${props.active ? "all" : "none"}; */

    /* background-color: ${props.active ? "yellow" : "white"}; */
  `;

  // function pageClicked() {
  //   console.log("Page " + props.pageNumber + " clicked");

  //   if (props.pageNumber % 2 == 1) {
  //     console.log("Setting to " + (props.pageNumber - 1));
  //     props.updatePage(props.pageNumber - 1);
  //   } else {
  //     console.log("Setting to " + (props.pageNumber + 1));
  //     props.updatePage(props.pageNumber + 1);
  //   }
  // }

  //   return <Container onClick={pageClicked}>{props.children}</Container>;

  return <Container>{props.children}</Container>;
};

export default Page;
