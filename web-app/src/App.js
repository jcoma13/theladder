import React from "react";
import "./App.css";
import Heading from "./components/Heading";
import PlayerList from "./components/PlayerList";
import AddButton from "./components/AddButton";
import { getPlayerData } from "./utils/helpers";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [
        /* no data.. empty array */
      ],
      open: false,
    };
    this.init();
  }

  async init() {

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

    const players = await getPlayerData();
    const formattedPlayers = players.map((player) => {
      var newPlayer =  
        {rank: player.attributes.Rank,
        id: player.attributes.ObjectId,
        name: player.attributes.Name,
        plays: player.attributes.Handedness,
        backhand: player.attributes.Backhand, 
        wins: player.attributes.Wins,
        losses: player.attributes.Losses, 
        feet: player.attributes.Feet, 
        inches: player.attributes.Inches}
      return newPlayer;
    });
    formattedPlayers.sort(compare);
    this.setState({ players: formattedPlayers });
  }

  handlePlayerAdd = (player) => {
    let playersCopy = [...this.state.players];
    playersCopy.push(player);
    this.setState({ players: playersCopy });
  };

  onPlayerListOrderChange = (sortedPlayers) => {
    this.setState({ players: sortedPlayers });
  };

  openModal = () => {
    this.setState({
      open: true,
    });
  };

  closeModal = () => {
    this.setState({
      open: false,
    });
  };

  handlePlayerUpdated = (player) => {
    this.props.onPlayerAdd(player);
    this.closeModal();
  };

  render() {
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
            newPlayerId={this.state.players.length + 1}
            onPlayerAdd={this.handlePlayerAdd}
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
            players={this.state.players}
            onOrderChange={this.onPlayerListOrderChange}
          />
        </div>
      </div>
    );
  }
}

export default App;
