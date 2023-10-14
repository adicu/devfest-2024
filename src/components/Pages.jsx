import { LeftPage, RightPage } from "./book-components/PageFlipApp";
import Page from "./book-components/Page";

const Pages = (props) => {
  return (
    <>
      <LeftPage visible={props.currentPage == 1 || props.currentPage == 2}>
        <Page
          active={props.currentPage == 1 || props.currentPage == 2}
          pageNumber={1}
          updatePage={props.updatePage}
        >
          This is page 1!
        </Page>
      </LeftPage>
      <RightPage visible={props.currentPage == 1 || props.currentPage == 2}>
        <Page
          active={props.currentPage == 1 || props.currentPage == 2}
          pageNumber={2}
          updatePage={props.updatePage}
        >
          This is page 2!
        </Page>
      </RightPage>
      <LeftPage visible={props.currentPage == 3 || props.currentPage == 4}>
        <Page
          active={props.currentPage == 3 || props.currentPage == 4}
          pageNumber={3}
          updatePage={props.updatePage}
        >
          This is page 3!
        </Page>
      </LeftPage>
      <RightPage visible={props.currentPage == 3 || props.currentPage == 4}>
        <Page
          active={props.currentPage == 3 || props.currentPage == 4}
          pageNumber={4}
          updatePage={props.updatePage}
        >
          This is page 4!
        </Page>
      </RightPage>
      <LeftPage visible={props.currentPage == 5 || props.currentPage == 6}>
        <Page
          active={props.currentPage == 5 || props.currentPage == 6}
          pageNumber={5}
          updatePage={props.updatePage}
        >
          This is page 5!
        </Page>
      </LeftPage>
    </>
  );
};

export default Pages;
