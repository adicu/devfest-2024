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
    // <ComingSoonPage mobile={mobile} />,
    // <div className="page-no-mobile"></div>,
  ]);

  if (data !== undefined) {
    pages = pages.concat(getSpeakerPages(data));
  }

  pages = pages.concat([<div className="page-no-mobile"></div>]);

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
    12: "Judges",
    13: "Speakers",
  };

  if (!invert) {
    let inverted_dict = {};

    for (const key in dict) {
      if (dict.hasOwnProperty(key)) {
        if (inverted_dict[dict[key]] !== undefined) {
          if (Number(key) < inverted_dict[dict[key]]) {
            inverted_dict[dict[key]] = Number(key);
          }
        } else {
          inverted_dict[dict[key]] = Number(key);
        }
      }
    }
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
        if (secondWord == undefined || firstWord == secondWord) {
          res = firstWord;
        }
        desktop_dict[page] = res;
        desktop_dict[otherPage] = res;
      }
    }
    return desktop_dict;
  }

  return dict;
}
