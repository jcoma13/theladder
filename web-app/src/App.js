import React from "react";
import "./App.css";
import Heading from "./components/Heading";
import PlayerList from "./components/PlayerList";
import playerData from "./data/players.json";

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
    const players = await getPlayerData();
    const formattedPlayers = players.map((player) => {
      /**
       * 
       * 
       * 
INPUT:
{
  "attributes": {
    "Rank": 1,
    "Name": "Jansen",
    "Handedness": "Right",
    "Backhand": "2-Handed",
    "Wins": 1,
    "Losses": 0,
    "Feet": 6,
    "Inches": 1,
    "Latitude": 34.0556,
    "Longitude": -117.1825,
    "ObjectId": 2
  }
}

Desired Output:
{
  "id": 1,
  "name": "Jansen",
  "feet": 6,
  "inches": 1,
  "plays": "right-handed",
  "backhand": "two-handed",
  "wins": 15,
  "losses": 6
},
       * 
       * 
       */
      //TODO - reformat players data and set state.
      console.log(player);
    });

    //when done set state
    // this.setState({ players: formattedPlayers });
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
    // loop over players, check if ids are the same with updated player and old
    // player then replace old player, otherwise don't swap
    this.props.onPlayerAdd(player);
    this.closeModal();
  };

  //talk to server functions
  render() {
    // const docsModalZIndex = { zIndex: 1001 };
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
