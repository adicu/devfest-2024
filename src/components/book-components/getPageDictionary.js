import getSpeakerPages from "../pages/speakers/getSpeakerPages";

export function getPageDictionary(data) {
  const homePage = 1;
  const tracksPage = 2;
  // const schedulePage = tracksPage + 1;
  // const speakersPage = schedulePage + getSchedulePages(data).length * 2;
  // const judgesPage = speakersPage + getSpeakerPages(data).length * 2;

  let dict = {
    Home: homePage,
    About: homePage,
    Tracks: tracksPage,
    Sponsors: 3,
    Schedule: 4,
    Workshops: 5,
    // Schedule: schedulePage,
    // Speakers: speakersPage,
    // Judges: judgesPage,
  };

  // const scheduleDict = getSchedulePageDict(data, schedulePage);

  // dict = Object.assign({}, dict, scheduleDict);
  return dict;
}
