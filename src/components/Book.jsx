import styled from "@emotion/styled";
import PageFlipApp from "./book-components/PageFlipApp";
import MobilePageFlipApp from "./book-components/MobilePageFlipApp";

const Book = (props) => {
  const Container = styled.div`
    flex: 5;
  `;

  const MobileContainer = styled.div`
    flex: 5;
  `;

  return (
    <>
      <MobileContainer className="mobile-shown">
        <MobilePageFlipApp
          data={props.data}
          pageDictionary={props.pageDictionary}
          parentPage={props.currentPage}
          previousPage={props.previousPage}
          updatePage={props.updatePage}
        />
      </MobileContainer>
      <Container className="mobile-hidden">
        <PageFlipApp
          data={props.data}
          pageDictionary={props.pageDictionary}
          parentPage={props.currentPage}
          previousPage={props.previousPage}
          updatePage={props.updatePage}
        />
      </Container>
    </>
  );
};

export default Book;
