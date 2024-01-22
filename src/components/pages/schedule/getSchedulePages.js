import DayPage from "./DayPage";

export function getSchedulePages(data) {
  if (data === undefined) {
    return [];
  }

  const eventsByDate = data.schedule.reduce((acc, event) => {
    const date = event.Date;

    if (!acc[date]) {
      acc[date] = [];
    }

    acc[date].push(event);

    return acc;
  }, {});

  const sortedArrays = Object.values(eventsByDate).sort((a, b) => {
    const dateA = new Date(a[0].Date.split(" ")[1]);
    const dateB = new Date(b[0].Date.split(" ")[1]);

    return dateA - dateB;
  });

  let result = [];

  for (let i = 0; i < sortedArrays.length; i++) {
    const dayOfWeek = sortedArrays[i][0].Date.split(" ")[0];
    const date = sortedArrays[i][0].Date.split(" ")[1];

    result.push(
      <DayPage
        key={dayOfWeek}
        dayOfWeek={dayOfWeek}
        date={date}
        events={sortedArrays[i]}
      />
    );
  }

  return result;
}
