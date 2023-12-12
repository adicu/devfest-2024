import styled from "@emotion/styled";

const svgTitleSize = "4.0vw";
const svgTitleSizeMobile = "14vw";
const svgTitleSizeBig = "7rem";

const textSizeMobile = "3vw";
const textSize = "1vw";
const textSizeBig = "1.3rem";

const svgDaySize = "2.5vw";
const svgDaySizeMobile = "10vw";
const svgDaySizeBig = "5rem";



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
    //background-color: white;
    height:100%;

    margin-bottom: 0.3rem;
    border: black solid 2px;
    

    p {
      position: relative;
      font-size: ${textSize};
      margin-left: 2.0rem;
      z-index:2;
    }

    @media (max-width: ${process.env.mobileWidth}) {
      p {
        position: relative;
        font-size: ${textSizeMobile};
        margin: 0.2rem;
        z-index:2;
      }
    }

    @media (min-width: ${process.env.bigWidth}) {
      p {
        position: relative;
        font-size: ${textSizeBig};
        margin: 0.2rem;
        z-index:2;
      }
    }
    img {
      height: ${svgDaySize};
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
    @media (max-width: ${process.env.mobileWidth}) {
    img {
      /* height: 2.3rem; */
      height: ${svgDaySizeMobile};
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
    }
    
    @media (min-width: ${process.env.bigWidth}) {
    img {
      height: ${svgDaySizeBig};
      display: block;
      margin-left: auto;
      margin-right: auto;
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
    flex:6;
    margin-right:0.5rem;
  `;
const TopLeftSpeech = styled.div`
    position: absolute;
    display: block;
    z-index:1;
    img {
      height: 10.0vw;
    }
`;
const TopRight = styled.div`
    flex: 4;
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
    flex: 4;
    margin-right:0.5rem;
  `;
const MidRight = styled.div`
    flex: 6;
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
                        <img
                            onDragStart={preventDragHandler}
                            src="/images/workshops/Monday.svg"
                        />
                        <TopLeftSpeech>
                            <img
                                onDragStart={preventDragHandler}
                                src="/images/workshops/text_bubble.svg"
                            />
                        </TopLeftSpeech>
                        <p>
                            Collaboration and tooling: git, VSCode, package managers, and deployment.
                        </p>
                    </TextBox>
                </TopLeft>
                <TopRight>
                    <TextBox>
                        <img
                            onDragStart={preventDragHandler}
                            src="/images/workshops/Tuesday.svg"
                        />
                        <p>
                            Backend: Creating the mitochondria of your web app.
                        </p>
                    </TextBox>
                </TopRight>
            </Top>
            <Middle>
                <MidLeft>
                    <TextBox>
                        <img
                            onDragStart={preventDragHandler}
                            src="/images/workshops/Wednesday.svg"
                        />
                        <p>
                            Frontend: I came, I saw, I designed. Intro to React, Next. js, HTML, JavaScript, TypeScript, and CSS.
                        </p>
                    </TextBox>
                </MidLeft>
                <MidRight>
                    <TextBox>
                        <img
                            onDragStart={preventDragHandler}
                            src="/images/workshops/Thursday.svg"
                        />
                        <p>
                            AI/ML: Are you smarter than a recommendation system? Making machines do smart things.
                        </p>
                    </TextBox>
                </MidRight>
            </Middle>
            <Bottom>
                <BottomDiv>
                    <TextBox>
                        <img
                            onDragStart={preventDragHandler}
                            src="/images/workshops/Friday.svg"
                        />
                        <p>
                            Lightning Talks.
                        </p>
                    </TextBox>
                </BottomDiv>
            </Bottom>
      </Container>
  );
};

export default WorkshopsPage;
