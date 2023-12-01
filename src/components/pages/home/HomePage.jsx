import styled from "@emotion/styled";

import starBurst from "../../../../public/images/home/starburst.svg";

const HomePage = (props) => {
  const Container = styled.div`
    width: 100%;
    height: 100%;

    background-image: url(${starBurst.src});
    background-position: left;
    background-repeat: no-repeat;
  `;

  const AboutImage = styled.img`
    margin-right: 1rem;
    margin-top: 10%;
    float: right;

    @media (max-width: ${process.env.mobileWidth}) {
      float: center;
      margin-right: 0;
      margin-top: 0.3rem;
      height: 2.5rem;
    }
  `;

  const AboutDiv = styled.div`
    background-color: white;
    margin: 0.5rem;
    margin-right: 1rem;

    float: right;

    margin-left: 15%;
    padding: 1em;

    border: black solid 1px;
    box-shadow: 5px 5px black;

    text-align: center;

    p {
      font-size: 1.3rem;
    }

    @media (max-width: ${process.env.mobileWidth}) {
      box-shadow: 3px 3px black;
      float: center;
      margin-left: 0.3rem;
      margin-right: 0.3rem;
      padding: 0.3rem;
      padding-bottom: 0.7rem;

      p {
        font-size: 12px;
      }
    }
  `;

  const RegisterButton = styled.button`
    text-decoration: none;
    padding: 0.5rem;
    color: white;
    background-color: #000d74;
    border-radius: none;
    box-shadow: 1px 1px black;

    cursor: pointer;

    font-size: 1.8rem;

    @media (max-width: ${process.env.mobileWidth}) {
      font-size: 14px;
    }
  `;

  const FAQImage = styled.img`
    float: left;
    margin-left: 1rem;
    margin-top: 10%;

    @media (max-width: ${process.env.mobileWidth}) {
      float: center;
      margin-left: 1rem;
      margin-top: 0.3rem;
      height: 2.5rem;
    }
  `;

  const FAQDiv = styled.div`
    background-color: white;
    margin-top: 0.3rem;
    margin-left: 2.5%;
    margin-right: 2.5%;

    float: right;
    width: 95%;
    padding: 0.5rem;

    border: black solid 2px;
    box-shadow: 5px 5px black;

    text-align: left;

    @media (max-width: ${process.env.mobileWidth}) {
      box-shadow: 3px 3px black;
      float: center;
      margin-left: 0.1rem;
      margin-right: 0.3rem;
      padding: 0.3rem;
    }
  `;

  const Question = styled.p`
    font-size: 1.3rem;
    font-weight: bold;
    margin-bottom: 0.1rem;

    @media (max-width: ${process.env.mobileWidth}) {
      font-size: 12px;
    }
  `;

  const Answer = styled.p`
    font-size: 1.2rem;
    margin-bottom: 1rem;

    @media (max-width: ${process.env.mobileWidth}) {
      font-size: 12px;
      margin-bottom: 0.2rem;
    }
  `;

  const register = (event) => {
    event.stopPropagation();
    window.location.href = "https://www.columbia.edu/";

    console.log("register button clicked");
  };

  const preventDragHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <AboutImage
        onDragStart={preventDragHandler}
        src="/images/titles/about.svg"
      />
      <br />
      <AboutDiv>
        <p>
          This week-long celebration of all things tech features workshops,
          speaker panels, and a hackathon to end all hackathons. Whether you're
          just getting started in the world of programming or you're a seasoned
          pro, DevFest has something for you.
        </p>
        <br />
        <p>
          Come join us and learn new skills, discover cutting-edge technologies,
          and build amazing projects.
        </p>
        <br />
        <RegisterButton onClick={register}>Register</RegisterButton>
      </AboutDiv>
      <br />
      <FAQImage onDragStart={preventDragHandler} src="/images/titles/faq.svg" />
      <FAQDiv>
        <Question> Is the hackathon online or in-person?</Question>
        <Answer>DevFest will be held in-person.</Answer>
        <Question>When is DevFest?</Question>
        <Answer>
          DevFest runs from Jan [xx] – [xx], with the hackathon portion going
          from Friday evening to Sunday morning of that week.
        </Answer>
        <Question>Who is eligible to participate?</Question>
        <Answer>DevFest is open to all Columbia affiliates.</Answer>
        <Question>
          What are the hackathon tracks and what do they mean?
        </Question>
        <Answer>
          The tracks provide participants with specific topics or fields to
          focus on while working on their projects. Additionally, these tracks
          align wi...
        </Answer>
      </FAQDiv>
    </Container>
  );
};

export default HomePage;
