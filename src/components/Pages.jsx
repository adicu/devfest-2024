import { LeftPage, RightPage } from "./book-components/PageFlipApp";
import Page from "./book-components/Page";

const Pages = (props) => {
  return (
    <>
      <LeftPage visible={props.currentPage == 1}>
        <Page pageNumber="1">Component A</Page>
      </LeftPage>
      <RightPage visible={props.currentPage == 2}>
        <Page pageNumber="2">Component B</Page>
      </RightPage>
      <LeftPage visible={props.currentPage == 3}>
        <Page pageNumber="3">Component C</Page>
      </LeftPage>
    </>
  );
};

export default Pages;
