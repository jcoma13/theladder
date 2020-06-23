import React, { Component } from "react";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import arrayMove from "array-move";
import PlayerCard from "../PlayerCard/PlayerCard";

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
    super(props);
    this.state = {
      players: props.players,
    };
  }

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(({ players }) => ({
      players: arrayMove(players, oldIndex, newIndex),
    }));
  };

  render() {
    return (
      <div>
        <SortableList players={this.state.players} onSortEnd={this.onSortEnd} />
      </div>
    );
  }
}

export default SortableComponent;
