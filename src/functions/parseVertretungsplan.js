function parseVertretungsplan(data) {
  try {
    let title = data["body > h3"][0];
    let date = title.split(" ")[2];
    let lastUpdate = data["body > div"][0];
    let text = "";

    text = data["tr.info td b"].join("\n");

    let vertretungsplan = [];
    let contentGrouped = [];
    let content = data[".mon_list > tr td"];

    content.forEach((element, i) => {
      content[i] = element.replace(/&nbsp;/g, "").replace("?", "→");
    });

    let crossedOut = data[".mon_list > tr td s"];

    for (let i = 0; i < content.length; i += 6) {
      contentGrouped.push(content.slice(i, i + 6));
    }

    contentGrouped.forEach((element) => {
      let klasse = element[0];
      let stunde = element[1];
      let fach = element[2];
      let raum = element[3];
      let lehrer = element[4];
      let bemerkung = element[5];

      crossedOut.forEach((crossed) => {
        if (crossed === fach) {
          fach = `-${fach}-`;
        }
        if (crossed === raum) {
          raum = `-${raum}-`;
        }
        if (crossed === lehrer) {
          lehrer = `-${lehrer}-`;
        }
      });

      let group = {
        klasse: klasse,
        stunde: stunde,
        fach: fach,
        raum: raum,
        lehrer: lehrer,
        bemerkung: bemerkung,
      };
      vertretungsplan.push(group);
    });

    return {
      title: title,
      date: date,
      lastUpdate: lastUpdate,
      text: text,
      vertretungsplan: vertretungsplan,
    };
  } catch (e) {
    console.error(e);
  }
}

export default parseVertretungsplan;
