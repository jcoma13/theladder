import React, { useState, useEffect } from "react";
import "./App.css";
import Heading from "./components/Heading";
import PlayerList from "./components/PlayerList";
import AddButton from "./components/AddButton";
import {
  getPlayerData,
  updatePlayers,
  addPlayer,
  deletePlayer,
} from "./utils/helpers";

const App = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    function compare(a, b) {
      const rankA = a.rank;
      const rankB = b.rank;

      let comparison = 0;
      if (rankA > rankB) {
        comparison = 1;
      } else if (rankA < rankB) {
        comparison = -1;
      }
      return comparison;
    }
    const _getPlayerData = async () => {
      try {
        const playersData = await getPlayerData();
        const formattedPlayers = playersData.map((player) => {
          var newPlayer = {
            rank: player.attributes.Rank,
            id: player.attributes.ObjectId,
            name: player.attributes.Name,
            plays: player.attributes.Handedness,
            backhand: player.attributes.Backhand,
            wins: player.attributes.Wins,
            losses: player.attributes.Losses,
            feet: player.attributes.Feet,
            inches: player.attributes.Inches,
          };
          return newPlayer;
        });
        formattedPlayers.sort(compare);
        setPlayers(formattedPlayers);
      } catch (error) {
        console.warn(error);
      }
    };
    _getPlayerData();
  }, []);

  const handlePlayerDelete = (playerId) => {
    var updatedPlayers = players.filter((item) => {
      return item.id !== playerId;
    });
    setPlayers(updatedPlayers);
    deletePlayer(playerId);
  };

  const handlePlayerAdd = (player) => {
    player.rank = players.length + 1;
    let playersCopy = [...players];
    playersCopy.push(player);
    setPlayers(playersCopy);
    addPlayer(player);
  };

  const handlePlayerUpdate = async (player) => {
    const rankedPlayers = [...players];
    rankedPlayers[player.rank - 1] = player;
    const updateSuccessful = await updatePlayers([player]);
    if (updateSuccessful) {
      setPlayers(rankedPlayers);
    }
  };

  const onPlayerListOrderChange = (sortedPlayers) => {
    const rankedPlayers = sortedPlayers.map((player, index) => {
      player.rank = index + 1;
      return player;
    });
    updatePlayers(rankedPlayers);
    setPlayers(rankedPlayers);
  };

  return (
    <div className="Heading">
      <Heading />
      <div
        className="AddButton"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AddButton
          newPlayerId={players.length + 1}
          onPlayerAdd={handlePlayerAdd}
        />
      </div>
      <div
        className="List"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <PlayerList
          players={players}
          onOrderChange={onPlayerListOrderChange}
          onPlayerDelete={handlePlayerDelete}
          onPlayerUpdated={handlePlayerUpdate}
        />
      </div>
    </div>
  );
};

export default App;
