import { LOAD_SKYMBA_DATA } from "./actionTypes";

export const getTrailData = (dispatch) => {
  const domparser = new DOMParser();
  let trails = [];

  fetch(
    "https://cors-anywhere-telegraham.herokuapp.com/https://trailstat.appspot.com/"
  )
    .then((response) =>
      response.ok
        ? response.text()
        : Promise.reject({
            status: response.status,
            statusText: response.text().message,
          })
    )
    .then((data) => {
      const doc = domparser
        .parseFromString(data, "text/html")
        .querySelectorAll("strong, h3");
      doc.forEach((node, index) => {
        if (index < doc.length - 5) {
          if (node.nodeName === "H3") {
            trails.push({ name: node.innerHTML });
          } else {
            const lineSplit = node.innerHTML.split(": ");
            trails[trails.length - 1][lineSplit[0].toLowerCase()] =
              lineSplit[1];
          }
        }
      });

      dispatch({
        type: LOAD_SKYMBA_DATA,
        payload: { trails: trails.slice(1).slice(-6) },
      });
    })
    .catch((error) => console.log(error));
};
