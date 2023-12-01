import styled from "@emotion/styled";

const Sidepane = (props) => {
  const Container = styled.div`
    flex: 1;
    /* display: flex; */
    /* flex-direction: column; */
    height: 100%;
  `;

  const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
  `;

  const Pane = styled.div`
    /* margin-left: 1rem;
    margin-right: 0;
    margin-top: 1rem;
    margin-bottom: 1rem; */
    margin-right: 1rem;
    flex: 1;
    border: solid 3px;
  `;

  const LinksPane = styled.div`
    height: 100%;
    width: 100%;
    background-color: white;
  `;

  const ADIPane = styled.div`
    height: 100%;
    width: 100%;
    background-color: rgb(219, 186, 163);
  `;

  return (
    <Container className="mobile-hidden">
      <FlexContainer>
        <Pane>
          <LinksPane>hi 1</LinksPane>
        </Pane>
        <Pane>
          <ADIPane>hi 2</ADIPane>
        </Pane>
      </FlexContainer>
    </Container>
  );
};

export default Sidepane;
