// import { LeftPage, RightPage } from "./book-components/PageFlipApp";
// import Page from "./book-components/Page";

// import Page1 from "./book-components/Page1";

export const maxPage = 5;

export const pages = [
  <div>This is page 1 from pages</div>,
  <div>This is page 2 from pages</div>,
  <div>This is page 3 from pages</div>,
];

// const Pages = (props) => {
//   function getVisible(pageNum) {
//     if (pageNum % 2 == 0) {
//       return props.currentPage == pageNum - 1 || props.currentPage == pageNum;
//     } else {
//       return props.currentPage == pageNum || props.currentPage == pageNum + 1;
//     }
//   }

//   return (
//     <>
//       <LeftPage visible={getVisible(1)}>
//         <Page
//           pageNumber={1}
//           visible={getVisible(1)}
//           updatePage={props.updatePage}
//         >
//           This is page 1
//         </Page>
//       </LeftPage>
//       <RightPage visible={getVisible(2)}>
//         <Page
//           pageNumber={2}
//           visible={getVisible(2)}
//           updatePage={props.updatePage}
//         >
//           This is page 2
//         </Page>
//       </RightPage>
//       <LeftPage visible={getVisible(3)}>
//         <Page
//           pageNumber={3}
//           visible={getVisible(3)}
//           updatePage={props.updatePage}
//         >
//           This is page 3
//         </Page>
//       </LeftPage>
//       <RightPage visible={getVisible(4)}>
//         <Page
//           pageNumber={4}
//           visible={getVisible(4)}
//           updatePage={props.updatePage}
//         >
//           This is page 4
//         </Page>
//       </RightPage>
//       <LeftPage visible={getVisible(5)}>
//         <Page
//           pageNumber={5}
//           visible={getVisible(5)}
//           updatePage={props.updatePage}
//         >
//           This is page 5
//         </Page>
//       </LeftPage>
//     </>
//   );
// };

// export default Pages;
