import React from "react";
import styled from "@emotion/styled";

const CalendarContainer = styled.div`
  width: 90%;
  max-width: 800px;
  margin: 0 auto;
`;

const ScheduleImage = styled.img`
  width: 130%;
  height: 110%;
  padding: 30px;
`;

const SchedulePage = (props) => {
  const calendarEmbedCode = `
    <iframe
      src="https://calendar.google.com/calendar/embed?src=c_bf8838880bdfb0d4a6adca842d1c6d62ef52f3a6970c2f93b6c27086cc152ca6%40group.calendar.google.com&ctz=America%2FNew_York"
      style="border: 0"
      width="100%"
      height="600"
      frameborder="0"
      scrolling="no"
    ></iframe>
  `;

  const preventDragHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      {/* Use the ScheduleImage styled component to set the image size */}
      <ScheduleImage
        onDragStart={preventDragHandler}
        src="/images/titles/schedule.svg"
        alt="Schedule Image"
      />
      <CalendarContainer dangerouslySetInnerHTML={{ __html: calendarEmbedCode }} />
    </div>
  );
};

export default SchedulePage;
