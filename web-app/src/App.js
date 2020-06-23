import React from "react";
import "./App.css";
import Heading from "./components/Heading";
import PlayerList from "./components/PlayerList/PlayerList";
import playerData from "./data/players.json";
import AddButton from "./components/AddButton";

class App extends React.Component {
  //TODO: create eventHandler for onPlayerAdd. {DONE}
  //TODO: initialize Player List with state.players {DONE}
  //TODO: On Player List Order change. update App's state.players

  constructor(props) {
    super(props);
    this.state = {
      players: playerData.players,
    };
  }

  handlePlayerAdd = (player) => {
    let playersCopy = [...this.state.players];
    playersCopy.push(player);
    this.setState({players: playersCopy})
  };

  onPlayerListOrderChange = () => {
    this.setState({players: this.state.players});
  }

  //talk to server functions
  render() {
    return (
      <div>
        <Heading />
        <div className='AddButton' style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>
          <AddButton onPlayerAdd={this.handlePlayerAdd} />
        </div>
        {/* use onPlayerListOrderChange() here to make sure order is updated */}
          <PlayerList players={this.state.players}/>
      </div>
    );
  }
}

export default App;
