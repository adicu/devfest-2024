import HomePage from "./pages/home/HomePage";
import TracksPage from "./pages/tracks/TracksPage";
import ComingSoonPage from "./pages/ComingSoonPage";

import SponsorsPage from "./pages/sponsors/SponsorsPage";
// import SchedulePage from "./pages/schedule/SchedulePage";
import WorkshopsPage from "./pages/workshops/WorkshopsPage";

import { getSchedulePages } from "./pages/schedule/getSchedulePages";

import { getSpeakerPages } from "./pages/speakers/getSpeakerPages";

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
    // <SchedulePage
    //   data={data}
    //   updatePage={updatePage}
    //   pageDictionary={pageDictionary}
    //   mobile={mobile}
    // />,
  ];

  if (data !== undefined) {
    pages = pages.concat(getSchedulePages(data));
  }

  pages = pages.concat([
    <WorkshopsPage mobile={mobile} />,
    <SponsorsPage mobile={mobile} />,
    // <ComingSoonPage mobile={mobile} />,
  ]);

  if (data !== undefined) {
    pages = pages.concat(getSpeakerPages(data));
  }

  return pages;
}

export function getPageDictionary(
  data = null,
  invert = false,
  desktop = false
) {
  let dict = {
    1: "About",
    2: "Tracks",
    5: "Sponsors",
    3: "Schedule",
    4: "Workshops",
    6: "Up Next",
  };

  if (!invert) {
    let inverted_dict = {};

    for (const key in dict) {
      if (dict.hasOwnProperty(key)) {
        inverted_dict[dict[key]] = Number(key);
      }
    }
    console.log("Inverted Dict is " + inverted_dict);

    return inverted_dict;
  }

  if (desktop) {
    let desktop_dict = {};

    for (const key in dict) {
      if (dict.hasOwnProperty(key)) {
        const page = Number(key);

        let otherPage;
        let firstWord;
        let secondWord;
        if (page % 2 == 1) {
          otherPage = page + 1;
          firstWord = dict[page];
          secondWord = dict[otherPage];
        } else {
          otherPage = page - 1;
          firstWord = dict[otherPage];
          secondWord = dict[page];
        }

        const res = `${firstWord}/${secondWord}`;
        desktop_dict[page] = res;
        desktop_dict[otherPage] = res;

        // console.log(`Key ${page}, other key ${otherPage}`);
        // desktop_dict[Number(key)]  = desktop_dict[dict[key]];
      }
    }

    console.log("Desktop dict is " + desktop_dict);

    return desktop_dict;
  }

  console.log("Dict is " + dict);

  return dict;
}
