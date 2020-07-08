import React from "react";
import "./App.css";
import Heading from "./components/Heading";
// import PlayerList from "./components/PlayerList/PlayerList";
import PlayerList2 from "./components/PlayerList2/PlayerList2";
import playerData from "./data/players.json";
// import initialData from './components/PlayerList2/initial-data';
// import Button from "calcite-react/Button";
// import Modal from "calcite-react/Modal";
// import PlayerCard from "./components/PlayerCard/PlayerCard";
// import {getNewPlayer} from "./utils/helpers";
import AddButton from "./components/AddButton";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      players: playerData.players,
      open: false,
    };
  }

  handlePlayerAdd = (player) => {
    let playersCopy = [...this.state.players];
    playersCopy.push(player);
    this.setState({players: playersCopy})
  }
  
  onPlayerListOrderChange = (sortedPlayers) => {
    this.setState({players: sortedPlayers});
  }

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
      <div className='Heading'>
        <Heading />
        <div className='AddButton' style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
          <AddButton 
            newPlayerId={this.state.players.length} 
            onPlayerAdd={this.handlePlayerAdd}
          />
        </div>
        <div className='List' style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <PlayerList2 
            players={this.state.players} 
            onOrderChange={this.onPlayerListOrderChange}
          />
        </div>
      </div>
    );
  }
}

export default App;
