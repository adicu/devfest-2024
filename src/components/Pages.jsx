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

  pages = pages.concat([<WorkshopsPage mobile={mobile} />]);

  if (data !== undefined) {
    pages = pages.concat(getSchedulePages(data));
  }

  pages = pages.concat([
    <SponsorsPage mobile={mobile} />,
    <ComingSoonPage mobile={mobile} />,
    // <div className="page-no-mobile"></div>,
  ]);

  // if (data !== undefined) {
  //   pages = pages.concat(getSpeakerPages(data));
  // }

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
    3: "Workshops",
    4: "Monday",
    5: "Tuesday",
    6: "Wednesday",
    7: "Thursday",
    8: "Friday",
    9: "Saturday",
    10: "Sunday",
    11: "Sponsors",
    12: "Up Next",
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

        let res = `${firstWord}/${secondWord}`;
        if (secondWord == undefined) {
          res = firstWord;
        }
        desktop_dict[page] = res;
        desktop_dict[otherPage] = res;
      }
    }

    console.log(desktop_dict);
    return desktop_dict;
  }

  return dict;
}
