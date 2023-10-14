import styled from "@emotion/styled";

const PageStyle = styled.div`
  background-color: red;

  transition: transform 0.5s ease;
  transform-style: preserve-3d;

  &.active {
    transform: rotateY(0deg);
  }

  &:nth-child(2) {
    transform: rotateY(180deg);
  }
`;

const Page = (props) => {
  return (
    <>
      <PageStyle>
        <p>{props.pageNumber}</p>

        <p>{props.children}</p>
      </PageStyle>
    </>
  );
};

export default Page;
