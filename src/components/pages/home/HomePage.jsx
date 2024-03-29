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
    }
  `;

  const AboutDiv = styled.div`
    user-select: text;

    background-color: white;
    margin: 0.5rem;
    margin-right: 1rem;

    float: right;

    margin-left: 15%;
    padding: 1em;

    border: black solid 1px;
    box-shadow: 5px 5px black;

    text-align: center;

    @media (max-width: ${process.env.mobileWidth}) {
      box-shadow: 3px 3px black;
      float: center;
      margin-left: 0.3rem;
      margin-right: 0.3rem;
      padding: 0.3rem;
      padding-bottom: 1rem;
    }
  `;

  const RegisterButton = styled.a`
    text-decoration: none;
    padding: 0.7rem;
    color: white;
    background-color: #000d74;
    border-radius: none;
    box-shadow: 1px 1px black;

    cursor: pointer;

    /* margin-bottom: 2rem; */

    font-size: 1.8rem;

    @media (max-width: ${process.env.mobileWidth}) {
      font-size: 1.3rem;
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
    }
  `;

  const FAQDiv = styled.div`
    user-select: text;

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
      margin-left: 0.3rem;
      width: auto;
      margin-right: 0.3rem;
      padding: 0.3rem;
    }
  `;

  const Question = styled.p`
    font-family: "PlotHolesBB-Bold";

    margin-bottom: 0.1rem;
  `;

  const Answer = styled.p`
    margin-bottom: 1rem;
  `;

  //   const register = (event) => {
  //     event.stopPropagation();
  //     window.location.href = "https://forms.gle/JUZKqNf16qDa63HY9";
  //   };

  const preventDragHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <AboutImage
        className="svg-page-title"
        onDragStart={preventDragHandler}
        src="/images/titles/about.svg"
      />
      <br />
      <AboutDiv>
        <h3 className="margin-bottom-1rem">Jan 29 - Feb 4</h3>
        <p>
          This
          <span className="font-bold">
            {" "}
            week-long celebration of all things tech{" "}
          </span>
          features workshops, speaker panels, and a hackathon to end all
          hackathons. Whether you're just getting started in the world of
          programming or you're a seasoned pro,{" "}
          <span className="font-bold">DevFest</span> has something for you.
        </p>
        <br />
        <p>
          Come join us and learn new skills, discover cutting-edge technologies,
          and build amazing projects.
        </p>
        <br />
        {/* {process.env.registrationClosed ? (
          <h5 className="font-bold">Registration has Closed</h5>
        ) : (
          <>
            <h5 className="font-bold">Registration Ends January 24th</h5>
            <br />
            <RegisterButton href="https://forms.gle/JUZKqNf16qDa63HY9">
              Register
            </RegisterButton>
          </>
        )} */}
        <>
          {/* <h5 className="font-bold">Registration Ends January 24th</h5> */}
          <br />
          <RegisterButton href="https://devfest-24.devpost.com/">
            DevPost
          </RegisterButton>
        </>
      </AboutDiv>
      <br />
      <FAQImage
        className="svg-page-title"
        onDragStart={preventDragHandler}
        src="/images/titles/faq.svg"
      />
      <FAQDiv>
        <Question>Is the hackathon online or in-person?</Question>
        <Answer>
          DevFest will be held in-person, on Columbia University’s campus.
        </Answer>
        <Question>When is DevFest?</Question>
        <Answer>
          DevFest runs from January 29th to February 4th, with the hackathon
          portion going from Saturday morning to Sunday morning of that week.
          Workshops and talks will run in the evening during the week, in the
          spirit of our weeklong development festival :)
        </Answer>
        <Question>Who is eligible to participate?</Question>
        <Answer>DevFest is open to all college students.</Answer>
        <Question>Is DevFest sponsoring travel?</Question>
        <Answer>
          No, unfortunately this year we will not be sponsoring travel.
        </Answer>

        <Question>
          What are the hackathon tracks and what do they mean?
        </Question>
        <Answer>
          The tracks provide participants with specific topics or fields to
          focus on while working on their projects. Each track has specific
          prizes attached.
        </Answer>

        <Question>Do I have to follow a specific track?</Question>
        <Answer>
          No, you are welcome to submit a general project that does not belong
          to a specific track.
        </Answer>

        <Question>What is the team size limit?</Question>
        <Answer>
          Teams can be of 1-4 people. Individual participation is allowed.
        </Answer>

        <Question>
          Will there be mentorship or support available during the hackathon?
        </Question>
        <Answer>
          Yes, experienced students and industry professionals (ADI alumni!)
          will be in-person and online during the hackathon.
        </Answer>

        <Question>What should I do if I have a question or concern?</Question>
        <Answer>
          If you have any questions or concerns, please don't hesitate to reach
          out to us via email at devfestorganizers@googlegroups.com or via our
          <a href="https://discord.gg/9VtwmYVRnH"> Discord server</a> where you
          can ping any of the organizers.
        </Answer>
      </FAQDiv>
    </Container>
  );
};

export default HomePage;
