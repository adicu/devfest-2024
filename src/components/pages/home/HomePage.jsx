import styled from "@emotion/styled";

import starBurst from "../../../../public/images/home/starburst.svg";

const HomePage = (props) => {
  const Container = styled.div`
    width: 100%;
    height: 100%;
    user-select: none;

    background-image: url(${starBurst.src});
    background-position: left;
    background-repeat: no-repeat;
  `;

  const DevFestTitle = styled.h1`
    margin-top: 0.5rem;
    margin-right: 1rem;
    font-size: 2.3rem;
    float: right;
  `;

  const InfoDiv = styled.div`
    background-color: white;
    margin: 0.5rem;
    margin-right: 1rem;

    float: right;
    width: "90%"; // TODO adjust this based on mobile/fit
    padding: 1em;

    border: black solid 1px;
    box-shadow: 5px 5px black;

    text-align: center;

    p {
      font-size: "14px"; // TODO adjust this based on mobile/fit
    }
  `;

  const RegisterButton = styled.a`
    text-decoration: none;
    padding: 0.5em;
    color: white;
    background-color: #000d74;
    border-radius: none;
    box-shadow: 1px 1px black;
  `;

  const FAQTitle = styled.h2`
    display: inline-block;
    margin-top: 1rem;
    margin-left: 1em;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 0.7rem;
    padding-right: 0.7rem;
    color: black;
    background-color: rgb(93, 151, 179);
    border: black solid 1px;
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
  `;

  const Question = styled.p`
    font-size: "14px"; // TODO adjust this based on mobile/fit
    font-weight: bold;
    margin-bottom: 0.1em;
  `;
  const Answer = styled.p`
    font-size: "14px"; // TODO adjust this based on mobile/fit
    margin-bottom: 0.1em;
  `;

  return (
    <Container>
      <DevFestTitle>DevFest</DevFestTitle>
      <br />
      <InfoDiv>
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
        <RegisterButton href="#">Register</RegisterButton>
      </InfoDiv>
      <br />
      <FAQTitle>FAQ</FAQTitle>
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
