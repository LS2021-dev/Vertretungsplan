import parseVertretungsplan from "./parseVertretungsplan";
const allOrigins = "https://api.allorigins.win/get?url=";

let cache = "";
window.navigator.onLine && (cache = `?version=${new Date().getTime()}`);

const url_1 =
  "https://schule.gymnasiumgroebenzell.de/vplantest_sdjfhs73452nsej35436jeFNJK3546mJEF38SRNJDKL3435ed6.php" +
  cache;
const url_2 =
  "https://schule.gymnasiumgroebenzell.de/vplantest_sdjfhs73452nsej35436jeFNJK3546mJEF38SRNJDKL3435ed5.php" +
  cache;

let data_1 = {};
let data_2 = {};

async function fetchVertretungsplan() {
  await fetch(allOrigins + url_1)
    .then((response) => response.json())
    .then((r) => {
      let d = document.createElement("html");
      d.innerHTML = r.contents;
      d = parseVertretungsplan(d);
      data_1 = d;
    });
  await fetch(allOrigins + url_2)
    .then((response) => response.json())
    .then((r) => {
      let d = document.createElement("html");
      d.innerHTML = r.contents;
      d = parseVertretungsplan(d);
      data_2 = d;
    });
  localStorage.lastUpdate = new Date();
  return [data_1, data_2];
}

export default fetchVertretungsplan;
