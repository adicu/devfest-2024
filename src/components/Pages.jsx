import HomePageLeft from "./pages/home/HomePageLeft";
import HomePageRight from "./pages/home/HomePageRight";

import getSpeakerPages from "./pages/speakers/getSpeakerPages";
import getEventsPages from "./pages/events/getEventsPages";
import getWorkshopPages from "./pages/workshops/getWorkshopPages";
import getInstructorPages from "./pages/instructors/getInstructorPages";
import getSponsorPages from "./pages/sponsors/getSponsorPages";

export default function Pages(data, updatePage = null, pageDictionary = null) {
  let pages = [
    [
      <HomePageLeft
        data={data}
        updatePage={updatePage}
        pageDictionary={pageDictionary}
      />,
      <HomePageRight
        data={data}
        updatePage={updatePage}
        pageDictionary={pageDictionary}
      />,
    ],
    [<div>This is page 3</div>, <div>This is page 4</div>],
  ];

  pages = pages.concat(getSpeakerPages(data, updatePage, pageDictionary));
  pages = pages.concat(getEventsPages(data, updatePage, pageDictionary));
  pages = pages.concat(getWorkshopPages(data, updatePage, pageDictionary));
  pages = pages.concat(getInstructorPages(data, updatePage, pageDictionary));
  pages = pages.concat(getSponsorPages(data, updatePage, pageDictionary));

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
