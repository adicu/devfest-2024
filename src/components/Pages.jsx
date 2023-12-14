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
  // pages must be even to display properly on desktop.
  // Create a dummy div with className "page-no-mobile" to display page only on desktop
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
    // <SponsorsPage mobile={mobile} />,
    <SchedulePage 
      data={data}
      updatePage={updatePage}
      pageDictionary={pageDictionary}
      mobile={mobile} 
    />,
    <WorkshopsPage mobile={mobile} />,
    <ComingSoonPage page="1" mobile={mobile} />,
    <ComingSoonPage page="2" className="page-no-mobile" mobile={mobile} />,
  ];

  return pages;
}
