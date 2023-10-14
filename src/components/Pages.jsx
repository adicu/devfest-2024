import { LeftPage, RightPage } from "./book-components/PageFlipApp";
import Page from "./book-components/Page";

export const maxPage = 5;

const Pages = (props) => {
  return (
    <>
      <LeftPage visible={props.currentPage == 1 || props.currentPage == 2}>
        <Page pageNumber={1} updatePage={props.updatePage}>
          This is page 1!
        </Page>
      </LeftPage>
      <RightPage visible={props.currentPage == 1 || props.currentPage == 2}>
        <Page pageNumber={2} updatePage={props.updatePage}>
          This is page 2!
        </Page>
      </RightPage>
      <LeftPage visible={props.currentPage == 3 || props.currentPage == 4}>
        <Page pageNumber={3} updatePage={props.updatePage}>
          This is page 3!
        </Page>
      </LeftPage>
      <RightPage visible={props.currentPage == 3 || props.currentPage == 4}>
        <Page pageNumber={4} updatePage={props.updatePage}>
          This is page 4!
        </Page>
      </RightPage>
      <LeftPage visible={props.currentPage == 5 || props.currentPage == 6}>
        <Page pageNumber={5} updatePage={props.updatePage}>
          This is page 5!
        </Page>
      </LeftPage>
    </>
  );
};

export default Pages;
