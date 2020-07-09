import { applyEdits } from "@esri/arcgis-rest-feature-layer";

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

export async function updatePlayers(players) {
  try {
    // TODO : review https://developers.arcgis.com/rest/services-reference/apply-edits-feature-service-.htm
    /**
     * look at updates array
     * Maybe needs to be a POST (search 'JavaScript Post Fetch API')
     */
    let editURL = new URL(
      "https://services1.arcgis.com/dOFzdrPdRgtU4fRo/ArcGIS/rest/services/Players/FeatureServer/0/applyEdits"
    );

    const updatedPlayers = players.map((player) => {
      return {
        attributes: {
          ObjectId: player.id,
          Rank: player.rank,
          Handedness: player.plays,
          Name: player.name,
          Backhand: player.backhand,
          Wins: player.wins,
          Losses: player.losses,
          Feet: player.feet,
          Inches: player.inches,
        },
      };
    });

    applyEdits({
      url:
        "https://services1.arcgis.com/dOFzdrPdRgtU4fRo/ArcGIS/rest/services/Players/FeatureServer/0",
      updates: JSON.stringify(updatedPlayers),
    });
  } catch (e) {
    console.error(e);
  }
}
