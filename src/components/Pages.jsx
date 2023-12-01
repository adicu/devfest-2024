import HomePage from "./pages/home/HomePage";
import TracksPage from "./pages/tracks/TracksPage";

import ComingSoonPage from "./pages/ComingSoonPage";

// import getSchedulePages from "./pages/schedule/getSchedulePages";
// import getSpeakerPages from "./pages/speakers/getSpeakerPages";

export default function Pages(data, updatePage = null, pageDictionary = null) {
  let pages = [
    [
      <HomePage
        data={data}
        updatePage={updatePage}
        pageDictionary={pageDictionary}
      />,
      <TracksPage
        data={data}
        updatePage={updatePage}
        pageDictionary={pageDictionary}
      />,
    ],
    [<ComingSoonPage />, <></>],
  ];

  // pages = pages.concat(getSchedulePages(data, updatePage, pageDictionary));
  // pages = pages.concat(getSpeakerPages(data, updatePage, pageDictionary));

  // const judgePages = [
  //   [<div>Judges Pages</div>, <div>Judges 1</div>],
  //   [<div>Judge 2</div>, <div>Judge 3</div>],
  // ];

  // pages = pages.concat(judgePages);

  return pages;
}
