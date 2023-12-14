import HomePage from "./pages/home/HomePage";
import TracksPage from "./pages/tracks/TracksPage";
import ComingSoonPage from "./pages/ComingSoonPage";

import SponsorsPage from "./pages/sponsors/SponsorsPage";
import SchedulePage from "./pages/schedule/SchedulePage";
import WorkshopsPage from "./pages/workshops/WorkshopsPage";

export default function Pages(
  data,
  updatePage = null,
  pageDictionary = null,
  mobile = false
) {
  let pages = [
    <HomePage
      data={data}
      updatePage={updatePage}
      pageDictionary={pageDictionary}
      mobile={mobile}
    />,
    <TracksPage
      data={data}
      updatePage={updatePage}
      pageDictionary={pageDictionary}
      mobile={mobile}
    />,
    <SponsorsPage mobile={mobile} />,
    <SchedulePage
      data={data}
      updatePage={updatePage}
      pageDictionary={pageDictionary}
      mobile={mobile}
    />,
    <WorkshopsPage mobile={mobile} />,
    <ComingSoonPage mobile={mobile} />,
  ];

  return pages;
}

export function getPageDictionary(data = null, invert = false) {
  let dict = {
    1: "About",
    2: "Tracks",
    3: "Sponsors",
    4: "Schedule",
    5: "Workshops",
  };

  if (!invert) {
    let inverted_dict = {};

    for (const key in dict) {
      if (dict.hasOwnProperty(key)) {
        inverted_dict[dict[key]] = Number(key);
      }
    }

    return inverted_dict;
  }

  return dict;
}
