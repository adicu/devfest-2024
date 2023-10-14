import styled from "@emotion/styled";

const colorPage = "white";

const Page = (props) => {
  const Container = styled.div`
    background-color: ${colorPage};
    height: 100%;
    width: 100%;

    pointer-events: none;
  `;

  return <Container>{props.children}</Container>;
};

export default Page;
