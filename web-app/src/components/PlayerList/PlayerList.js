import React from "react";
import "@atlaskit/css-reset";
import { DragDropContext } from "react-beautiful-dnd";
import arrayMove from "array-move";
import DroppablePlayerList from "./DroppablePlayerList";

const PlayerList = (props) => {
  const onDragEnd = (result) => {
    const { destination, source } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    const sortedPlayers = arrayMove(
      props.players,
      source.index,
      destination.index
    );

    props.onOrderChange(sortedPlayers);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <DroppablePlayerList
        key="PlayerList"
        title="Players"
        columnId="playerList"
        players={props.players}
        onPlayerDelete={props.onPlayerDelete}
        onPlayerUpdated={props.onPlayerUpdated}
      />
    </DragDropContext>
  );
};

export default PlayerList;
