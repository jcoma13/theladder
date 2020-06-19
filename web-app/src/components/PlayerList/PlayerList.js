import React, { Component } from "react";
import { render } from "react-dom";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import arrayMove from "array-move";
import PlayerCard from "../PlayerCard/PlayerCard";
import Button, { ButtonGroup } from "calcite-react/Button";
import AddButton from "../AddButton";
// inputs of players (array of playercards)
// sort players by rank
// display them in order of highest rank to lowest

const SortableItem = SortableElement(({ player }) => {
  return (
    <PlayerCard
      name={player.name}
      feet={player.feet}
      inches={player.inches}
      plays={player.plays}
      backhand={player.backhand}
      wins={player.wins}
      losses={player.losses}
    />
  );
});

const SortableList = SortableContainer(({ players }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {players.map((player, index) => (
        <SortableItem key={`player-${index}`} index={index} player={player} />
      ))}
    </div>
  );
});

class SortableComponent extends Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      players: props.players,
      // Error message I'm getting: Cannot read property 'slice' of undefined
    };
  }
  //constructor for this component
  //set state from playerData to players
  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(({ players }) => ({
      players: arrayMove(players, oldIndex, newIndex),
    }));
    // console.log(arrayMove(players, oldIndex, newIndex))
  };

  render() {
    return (
      <div>
        <AddButton />
        <SortableList players={this.state.players} onSortEnd={this.onSortEnd} />
      </div>
    );
  }
}

export default SortableComponent;
