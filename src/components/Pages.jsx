import HomePage from "./pages/home/HomePage";
import TracksPage from "./pages/tracks/TracksPage";
import ComingSoonPage from "./pages/ComingSoonPage";

export default function Pages(data, updatePage = null, pageDictionary = null) {
  // pages must be even to display properly on desktop.
  // Create a dummy div with className "page-no-mobile" to display page only on desktop
  let pages = [
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
    <ComingSoonPage />,
    <div className="page-no-mobile"></div>,
  ];

  return pages;
}
