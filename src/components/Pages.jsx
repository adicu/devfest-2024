import HomePageLeft from "./pages/home/HomePageLeft";
import HomePageRight from "./pages/home/HomePageRight";

import getSpeakerPages from "./pages/speakers/getSpeakerPages";
import getEventsPages from "./pages/events/getEventsPages";
import getWorkshopPages from "./pages/workshops/getWorkshopPages";
import getInstructorPages from "./pages/instructors/getInstructorPages";
import getSponsorPages from "./pages/sponsors/getSponsorPages";

export default function Pages(data) {
  let pages = [[<HomePageLeft data={data} />, <HomePageRight data={data} />]];

  pages = pages.concat(getSpeakerPages(data));
  pages = pages.concat(getEventsPages(data));
  pages = pages.concat(getWorkshopPages(data));
  pages = pages.concat(getInstructorPages(data));
  pages = pages.concat(getSponsorPages(data));

  return pages;
}

export function getPageDictionary(data) {
  const homePage = 1;
  const speakerPage = homePage + getSpeakerPages(data).length;
  const eventPage = speakerPage + getEventsPages(data).length;
  const workshopPage = eventPage + getWorkshopPages(data).length;
  const instructorPage = workshopPage + getInstructorPages(data).length;
  const sponsorPage = instructorPage + getSponsorPages(data).length;

  return {
    Home: homePage,
    Speakers: speakerPage,
    Events: eventPage,
    Workshops: workshopPage,
    Instructors: instructorPage,
    Sponsors: sponsorPage,
  };
}
