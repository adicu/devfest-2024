import styled from "@emotion/styled";

import starBurst from "../../../../public/images/home/starburst.svg";

const svgTitleSize = "5.5vw";
const svgTitleSizeMobile = "14vw";
const svgTitleSizeBig = "5rem";

const textSizeMobile = "3vw";
const textSize = "1vw";
const textSizeBig = "1.1rem";

const dateSizeMobile = "6vw";
const dateSize = "2vw";
const dateSizeBig = "2.2rem";

const HomePage = (props) => {
  const Container = styled.div`
    width: 100%;
    height: 100%;

    /* background-color: purple; */

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
      /* height: 2.3rem; */
    }

    /* background-color: red; */
    height: ${svgTitleSize};

    @media (max-width: ${process.env.mobileWidth}) {
      height: ${svgTitleSizeMobile};
    }

    @media (min-width: ${process.env.bigWidth}) {
      height: ${svgTitleSizeBig};
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

    @media (max-width: ${process.env.mobileWidth}) {
      box-shadow: 3px 3px black;
      float: center;
      margin-left: 0.3rem;
      margin-right: 0.3rem;
      padding: 0.3rem;
      padding-bottom: 0.7rem;
    }

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

    .bigdate {
      font-size: ${dateSize};
      margin-bottom: 1rem;
    }

    @media (max-width: ${process.env.mobileWidth}) {
      .bigdate {
        font-size: ${dateSizeMobile};
        /* margin-bottom: 0.2rem; */
      }
    }

    @media (min-width: ${process.env.bigWidth}) {
      .bigdate {
        font-size: ${dateSizeBig};
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
      /* font-size: 14px; */
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
      /* height: 2.3rem; */
    }

    height: ${svgTitleSize};

    @media (max-width: ${process.env.mobileWidth}) {
      height: ${svgTitleSizeMobile};
    }

    @media (min-width: ${process.env.bigWidth}) {
      height: ${svgTitleSizeBig};
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

    /* height: 40%; */
    /* overflow-y: scroll; */
    /* overflow-x: hidden; */
    /* scrollbar-width: none; */

    /* ::-webkit-scrollbar { */
    /* display: none; */
    /* } */

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
    font-size: ${textSize};
    font-weight: bold;
    margin-bottom: 0.1rem;

    @media (max-width: ${process.env.mobileWidth}) {
      font-size: ${textSizeMobile};
    }

    @media (min-width: ${process.env.bigWidth}) {
      font-size: ${textSizeBig};
    }
  `;

  const Answer = styled.p`
    font-size: ${textSize};
    margin-bottom: 1rem;

    @media (max-width: ${process.env.mobileWidth}) {
      font-size: ${textSizeMobile};
      /* margin-bottom: 0.2rem; */
    }

    @media (min-width: ${process.env.bigWidth}) {
      font-size: ${textSizeBig};
    }
  `;

  //   const BigDate = styled.p`
  //     font-size: ${dateSize};
  //     margin-bottom: 1rem;

  //     @media (max-width: ${process.env.mobileWidth}) {
  //       font-size: ${dateSizeMobile};
  //       margin-bottom: 0.2rem;
  //     }

  //     @media (min-width: ${process.env.bigWidth}) {
  //       font-size: ${dateSizeBig};
  //     }
  //   `;

  const register = (event) => {
    event.stopPropagation();
    window.location.href =
      "https://docs.google.com/forms/d/e/1FAIpQLSe80mii-9-7a-YEzShJt-WaBpfxWJzesrbOmULxTcu_YjHOAQ/viewform?usp=sf_link";
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
        <p className="bigdate">Jan 29 - Feb 4</p>
        <p>
          This <strong>week-long celebration of all things tech</strong>{" "}
          features workshops, speaker panels, and a hackathon to end all
          hackathons. Whether you're just getting started in the world of
          programming or you're a seasoned pro, DevFest has something for you.
        </p>
        <br />
        <p>
          Come join us and learn new skills, discover cutting-edge technologies,
          and build amazing projects.
        </p>
        {/* <br />
        <p>
          <a href="https://calendar.google.com/calendar/u/0/r?cid=Y19iYzE0YzE1ZjU5MDJhOWFlZDk2NjMxMGU0OTNjYjllYzU5ZGRjZWMyMzdiZDI5NjNiYjRmNjdhMDE5YmJmMzVhQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20">
            Tentative Schedule (GCal)
          </a>
        </p> */}
        <br />
        <RegisterButton onClick={register}>Register</RegisterButton>
      </AboutDiv>
      <br />
      <FAQImage onDragStart={preventDragHandler} src="/images/titles/faq.svg" />
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
          Discord server where you can ping any of the organizers.
        </Answer>
      </FAQDiv>
    </Container>
  );
};

export default HomePage;
