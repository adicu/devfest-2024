export function getPageDictionary(data = null, invert = false) {
  // let dict = {
  //   About: 1,
  //   Tracks: 2,
  //   Sponsors: 3,
  //   Schedule: 4,
  //   Workshops: 5,
  // };

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
