import parseVertretungsplan from "./parseVertretungsplan";

let cache = "";
window.navigator.onLine && (cache = `?version=${new Date().getTime()}`);

const url_1 =
  "https://web.scraper.workers.dev/?url=https%3A%2F%2Fschule.gymnasiumgroebenzell.de%2Fvplantest_sdjfhs73452nsej35436jeFNJK3546mJEF38SRNJDKL3435ed6.php&selector=body+%3E+h3%2C+body+%3E+div%2C+tr.info+td+b%2C+.mon_list+%3E+tr+td%2C+.mon_list+%3E+tr+td+s&scrape=text&pretty=true" +
  cache;
const url_2 =
  "https://web.scraper.workers.dev/?url=https%3A%2F%2Fschule.gymnasiumgroebenzell.de%2Fvplantest_sdjfhs73452nsej35436jeFNJK3546mJEF38SRNJDKL3435ed5.php&selector=body+%3E+h3%2C+body+%3E+div%2C+tr.info+td+b%2C+.mon_list+%3E+tr+td%2C+.mon_list+%3E+tr+td+s&scrape=text&pretty=true" +
  cache;

let data_1 = {};
let data_2 = {};

async function fetchVertretungsplan() {
  const response1 = await fetch(url_1);
  const result1 = await response1.json();
  data_1 = parseVertretungsplan(result1.result);

  const response2 = await fetch(url_2);
  const result2 = await response2.json();
  data_2 = parseVertretungsplan(result2.result);

  localStorage.lastUpdate = new Date();
  return [data_1, data_2];
}

export default fetchVertretungsplan;
