import React from "react";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import arrayMove from "array-move";
import PlayerCard from "../PlayerCard/PlayerCard";

const SortableItem = SortableElement(({ player }) => {
  return <PlayerCard player={player} />;
});

const PlayerList = (props) => {
  const onSortEnd = ({ oldIndex, newIndex }) => {
    const sortedPlayers = arrayMove(props.players, oldIndex, newIndex);
    props.onOrderChange(sortedPlayers);
  };

  const SortableList = SortableContainer(({ players }) => {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        {players.map((player, index) => (
          <SortableItem key={`player-${index}`} index={index} player={player} />
        ))}
      </div>
    );
  });

  return (
    <div>
      {/* use indexOf method here to reassign indices to cards in array */}
      <SortableList players={props.players} onSortEnd={onSortEnd} />
    </div>
  );
};

export default PlayerList;
