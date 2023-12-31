function parseVertretungsplan(data) {
  try {
    let title = data.querySelector("body > h3").innerText;
    let date = title.split(" ")[2];
    let lastUpdate = data.querySelector("body > div").innerText;
    let klassen = data.querySelector(
      "body > table.info > tbody > tr:nth-child(2) > td:nth-child(2)",
    ).innerText;
    let text;
    try {
      text = data.querySelector(
        "body > table.info > tbody > tr:nth-child(3) > td",
      ).innerText;
    } catch (e) {
      text = "---";
    }
    let table = Array.from(
      data.querySelectorAll("body > table.mon_list > tbody > tr"),
    );
    let vertretungsplan = [];
    table.forEach((row) => {
      let klasse = row.children[0].innerText;
      let stunde = row.children[1].innerText;
      let fach = row.children[2].innerHTML;
      let raum = row.children[3].innerHTML;
      let lehrer = row.children[4].innerHTML;
      let bemerkung = row.children[5].innerText;

      stunde = stunde.replaceAll(" ", "");
      fach = fach
        .replace("?", "→")
        .replaceAll("<s>", "-")
        .replaceAll("</s>", "-");
      raum = raum
        .replace("?", "→")
        .replaceAll("<s>", "-")
        .replaceAll("</s>", "-");
      lehrer = lehrer
        .replace("?", "→")
        .replaceAll("<s>", "-")
        .replaceAll("</s>", "-");

      klasse = klasse.replace(/<[^>]*>?/gm, "");
      stunde = stunde.replace(/<[^>]*>?/gm, "");
      fach = fach.replace(/<[^>]*>?/gm, "");
      raum = raum.replace(/<[^>]*>?/gm, "");
      lehrer = lehrer.replace(/<[^>]*>?/gm, "");
      bemerkung = bemerkung.replace(/<[^>]*>?/gm, "");

      if (!bemerkung.match(/[a-zA-Z]|\d/gm)) bemerkung = " ";
      let vertretungsplanRow = {
        klasse: klasse,
        stunde: stunde,
        fach: fach,
        raum: raum,
        lehrer: lehrer,
        bemerkung: bemerkung,
      };
      vertretungsplan.push(vertretungsplanRow);
    });

    vertretungsplan.shift();

    return {
      title: title,
      date: date,
      lastUpdate: lastUpdate,
      klassen: klassen,
      text: text,
      vertretungsplan: vertretungsplan,
    };
  } catch (e) {
    console.error(e);
  }
}

export default parseVertretungsplan;
