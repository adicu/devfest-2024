import styled from "@emotion/styled";

// const PageStyle = styled.div`
//   background-color: red;

//   transition: transform 0.5s ease;
//   transform-style: preserve-3d;

//   &.active {
//     transform: rotateY(0deg);
//   }

//   &:nth-child(2) {
//     transform: rotateY(180deg);
//   }
// `;

const PageWrapper = styled.div`
  background-color: violet;
  height: 100%;
`;

const Page = (props) => {
  //   const PageWrapper = styled.div`
  //     position: absolute;
  //     top: 0;
  //     left: 0;
  //     opacity: ${({ visible }) => (props.visible ? 1 : 0)};
  //     transition: opacity 0.5s ease-in-out;
  //   `;

  return (
    <PageWrapper>
      <p>{props.pageNumber}</p>

      <p>{props.children}</p>
    </PageWrapper>
  );
};

export default Page;
