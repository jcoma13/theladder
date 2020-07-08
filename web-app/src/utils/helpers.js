export function getNewPlayer(newId) {
  return {
    id: newId,
    name: "",
    feet: null,
    inches: null,
    plays: "",
    backhand: "",
    wins: null,
    losses: null,
    mode: "editable",
  };
}

export async function getPlayerData() {
  try {
    let queryURL = new URL(
      "https://services1.arcgis.com/dOFzdrPdRgtU4fRo/ArcGIS/rest/services/Players/FeatureServer/0/query"
    );
    queryURL.search = new URLSearchParams({
      where: "1=1",
      f: "json",
      outFields: "*",
      returnGeometry: false,
    });
    const request = await fetch(queryURL);
    const players = await request.json();
    return players.features;
  } catch (e) {
    console.error(e);
  }
}

export async function updatePlayer(player) {
  try {
    //TODO : review https://developers.arcgis.com/rest/services-reference/apply-edits-feature-service-.htm
    /**
     * look at updates array
     * Maybe needs to be a POST (search 'JavaScript Post Fetch API')
     */
    let queryURL = new URL(
      "https://services1.arcgis.com/dOFzdrPdRgtU4fRo/ArcGIS/rest/services/Players/FeatureServer/0/applyEdits"
    );
    // queryURL.search = new URLSearchParams({
    //   where: "1=1",
    //   f: "json",
    //   outFields: "*",
    //   returnGeometry: false,
    // });
    // const request = await fetch(queryURL);
    // const players = await request.json();
    // return players.features;
  } catch (e) {
    console.error(e);
  }
}
