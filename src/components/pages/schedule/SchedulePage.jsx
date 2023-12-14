import React from "react";
import styled from "@emotion/styled";

const gcal_url =
  "https://calendar.google.com/calendar/embed?showNav=0&showPrint=0&showCalendars=0&mode=week&wkst=2&src=c_bc14c15f5902a9aed966310e493cb9ec59ddcec237bd2963bb4f67a019bbf35a%40group.calendar.google.com&dates=20240129%2F20240204";

const Container = styled.div`
  width: 100%;
  height: 100%;

  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

const CalendarContainer = styled.div`
  width: 100%;
  /* max-width: 800px; */
  height: 100%;
  /* padding-top: 1rem; */
  /* margin: 0 auto; */

  margin: 0;
  padding: 0;
`;

// const ScheduleImage = styled.img`
//   width: 130%;
//   height: 110%;
//   padding: 30px;
// `;

const TitleDiv = styled.div`
  position: relative;
  padding-top: 1rem;

  /* flex: 0; */
  /* width: 100%; */
  text-align: center;

  padding-bottom: 1rem;

  /* align-items: center; */
`;

const IFrame = styled.iframe`
  width: 100%;
  height: 100%;

  border: solid 1px #777;
`;

const SchedulePage = (props) => {
  //   const calendarEmbedCode = `
  //     <iframe
  //       src="https://calendar.google.com/calendar/embed?src=c_bc14c15f5902a9aed966310e493cb9ec59ddcec237bd2963bb4f67a019bbf35a%40group.calendar.google.com&ctz=America%2FNew_York"
  //       style="border: 0"
  //       width="100%"
  //       height="100%"
  //       frameborder="0"
  //       scrolling="no"
  //     ></iframe>
  //   `;

  const preventDragHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      {/* Use the ScheduleImage styled component to set the image size */}
      {/* <ScheduleImage
        onDragStart={preventDragHandler}
        src="/images/titles/schedule.svg"
        alt="Schedule Image"
      /> */}
      {/* <CalendarContainer
        dangerouslySetInnerHTML={{ __html: calendarEmbedCode }}
      /> */}
      <TitleDiv>
        <img
          className="svg-page-title"
          onDragStart={preventDragHandler}
          src="/images/titles/schedule.svg"
        />
      </TitleDiv>
      <CalendarContainer>
        {/* <IFrame src="https://calendar.google.com/calendar/embed?src=c_bc14c15f5902a9aed966310e493cb9ec59ddcec237bd2963bb4f67a019bbf35a%40group.calendar.google.com&ctz=America%2FNew_York"></IFrame> */}
        <IFrame src={gcal_url}></IFrame>
      </CalendarContainer>
    </Container>
  );
};

export default SchedulePage;
