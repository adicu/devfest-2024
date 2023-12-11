import styled from "@emotion/styled";

const svgTitleSize = "4.0vw";
const svgTitleSizeMobile = "14vw";
const svgTitleSizeBig = "7rem";

const textSizeMobile = "3vw";
const textSize = "1vw";
const textSizeBig = "1.3rem";

const titleSizeMobile = "4.6vw";
const titleSize = "1.8vw";
const titleSizeBig = "2rem";

const preventDragHandler = (e) => {
  e.preventDefault();
};

const TitleDiv = styled.div`
    position: relative;
    /* margin-left: 1rem; */
    padding-top: 1rem;

    // width: ${svgTitleSize};
    width: 100%;
    text-align: center;
    img {
      height: ${svgTitleSize};
    }

    /* background-color: red; */

    @media (max-width: ${process.env.mobileWidth}) {
      img {
        /* height: 2.3rem; */
        height: ${svgTitleSizeMobile};
      }
    }

    @media (min-width: ${process.env.bigWidth}) {
      img {
        height: ${svgTitleSizeBig};
      }
    }
  `;

const TextBox = styled.div`
    background-color: white;
    height:100%;

    margin-bottom: 0.3rem;
    border: black solid 2px;
    

    p {
      font-size: ${textSize};
    }

    @media (max-width: ${process.env.mobileWidth}) {
      p {
        font-size: ${textSizeMobile};
      }
    }

    @media (min-width: ${process.env.bigWidth}) {
      p {
        font-size: ${textSizeBig};
      }
    }
  `;

const Top = styled.div`
    position: relative;
    max-width: 100%;
    height: 30%;
  
    display: flex;
    flex-direction: row;
    margin: 0.5rem;
  `;
const TopLeft = styled.div`
    flex: 4;
    margin-right:0.5rem;
  `;
const TopRight = styled.div`
    flex: 6;
    margin-left:0.5rem;
  `;

const Middle = styled.div`
    position: relative;
    max-width: 100%;
    height: 30%;
  
    display: flex;
    flex-direction: row;

    margin: 0.5rem;
  `;
const MidLeft = styled.div`
    flex: 6;
    margin-right:0.5rem;
  `;
const MidRight = styled.div`
    flex: 4;
    margin-left:0.5rem;
  `;

const Bottom = styled.div`
    position: relative;
    max-width: 100%;
    height: 20%;
    display: flex;
    flex-direction: row;
    margin: 0.5rem;
  `;

const BottomDiv = styled.div`
    flex: 1;
  `;

const WorkshopsPage = (props) => {
  const NextPageMessage = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    /* margin-right: 0.2rem; */
    /* margin-top: 0.2rem; */
    color: gray;

    /* background-color: red; */

    font-size: 1vw;

    z-index: 1;

    @media (max-width: ${process.env.mobileWidth}) {
      display: none;
    }

    /* background-color: yellow; */
  `;

  const Container = styled.div`
    width: 100%;
    height: 100%;
    user-select: none;
  `;


  return (
        <Container>
            <TitleDiv>
              {/* <NextPageMessage>(Click to advance)</NextPageMessage> */}
              <img
                  onDragStart={preventDragHandler}
                  src="/images/workshops/workshops_title.svg"
              />
            </TitleDiv>
            <Top>
                <TopLeft>
                    <TextBox>
                        <p>
                            Monday
                        </p>
                    </TextBox>
                </TopLeft>
                <TopRight>
                    <TextBox>
                        <p>
                            Tuesday
                        </p>
                    </TextBox>
                </TopRight>
            </Top>
            <Middle>
                <MidLeft>
                    <TextBox>
                        <p>
                            Wednesday
                        </p>
                    </TextBox>
                </MidLeft>
                <MidRight>
                    <TextBox>
                        <p>
                            Thursday
                        </p>
                    </TextBox>
                </MidRight>
            </Middle>
            <Bottom>
                <BottomDiv>
                    <TextBox>
                        <p>
                            Friday
                        </p>
                    </TextBox>
                </BottomDiv>
            </Bottom>
      </Container>
  );
};

export default WorkshopsPage;
