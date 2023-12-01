import getSchedulePages from "../pages/schedule/getSchedulePages";
import getSpeakerPages from "../pages/speakers/getSpeakerPages";

import getSchedulePageDict from "../pages/schedule/getSchedulePageDict";

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
    // Schedule: schedulePage,
    // Speakers: speakersPage,
    // Judges: judgesPage,
  };

  // const scheduleDict = getSchedulePageDict(data, schedulePage);

  // dict = Object.assign({}, dict, scheduleDict);
  return dict;
}
