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
  height: 100%;

  margin: 0;
  padding: 0;
`;

const TitleDiv = styled.div`
  position: relative;
  padding-top: 1rem;

  text-align: center;

  padding-bottom: 1rem;
`;

const IFrame = styled.iframe`
  width: 100%;
  height: 100%;

  border: solid 1px #777;
`;

const SchedulePage = (props) => {
  const preventDragHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <TitleDiv>
        <img
          className="svg-page-title"
          onDragStart={preventDragHandler}
          src="/images/titles/schedule.svg"
        />
      </TitleDiv>
      <CalendarContainer>
        <IFrame src={gcal_url}></IFrame>
      </CalendarContainer>
    </Container>
  );
};

export default SchedulePage;
