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

const Container = styled.div`
  background-color: violet;
  height: 100%;
`;

const Page = (props) => {
  return (
    <Container>
      <p>{props.pageNumber}</p>

      <p>{props.children}</p>
    </Container>
  );
};

export default Page;
