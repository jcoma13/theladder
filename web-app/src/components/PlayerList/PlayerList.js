import React from "react";
// import ReactDOM from 'react-dom';
import "@atlaskit/css-reset";
import { DragDropContext } from "react-beautiful-dnd";
import arrayMove from "array-move";
import DroppablePlayerList from "./DroppablePlayerList";

const PlayerList = (props) => {
  const onDragEnd = (result) => {
    // dropped outside the list
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
      />
    </DragDropContext>
  );
};

export default PlayerList;
