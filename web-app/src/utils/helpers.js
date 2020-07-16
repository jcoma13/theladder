import {
  applyEdits,
  addFeatures,
  deleteFeatures,
} from "@esri/arcgis-rest-feature-layer";

export function getNewPlayer(newId) {
  return {
    id: newId,
    name: "",
    feet: 0,
    inches: 0,
    plays: "",
    backhand: "",
    wins: 0,
    losses: 0,
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

export async function addPlayer(player) {
  try {
    const newPlayer = {
      geometry: { x: -117.1825, y: 34.0556 },
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

    addFeatures({
      url:
        "https://services1.arcgis.com/dOFzdrPdRgtU4fRo/ArcGIS/rest/services/Players/FeatureServer/0",
      features: [newPlayer],
    });
  } catch (e) {
    console.error(e);
  }
}

export async function deletePlayer(playerId) {
  try {
    deleteFeatures({
      url:
        "https://services1.arcgis.com/dOFzdrPdRgtU4fRo/ArcGIS/rest/services/Players/FeatureServer/0",
      objectIds: [playerId],
    });
  } catch (e) {
    console.error(e);
  }
}
