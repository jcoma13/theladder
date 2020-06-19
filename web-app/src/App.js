import React from "react";
import "./App.css";
import Heading from "./components/Heading";
import PlayerCard from "./components/PlayerCard/PlayerCard";
import PlayerList from "./components/PlayerList/PlayerList";
import playerData from "./data/players.json";
import AddButton from "./components/AddButton";
class App extends React.Component {
  //TODO: create eventHandler for onPlayerAdd.
  //TODO: initialize Player List with state.players
  //TODO: On Player List Order change. update  App's state.players

  constructor(props) {
    this.state = {
      players: playerData.players,
    };
  }

  handlePlayerAdd = () => {
    /* add new player to state players array */
  };

  //talk to server functions
  render() {
    return (
      <div className="App">
        <Heading />
        <AddButton onPlayerAdd={this.handlePlayerAdd} />
        <PlayerList />
      </div>
    );
  }
}

export default App;
