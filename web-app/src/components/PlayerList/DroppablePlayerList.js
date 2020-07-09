import React from "react";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";
import PlayerCard from "../PlayerCard/PlayerCard";
import { updatePlayers } from "../../utils/helpers";
const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
`;

const Title = styled.h3`
  padding: 8px;
`;

const PList = styled.div`
  padding: 8px;
`;

export default class DroppablePlayerList extends React.Component {
  render() {
    // console.log(this.props.players.map((player) => player.id));
    return (
      <Container style={{ maxWidth: "375px", textAlign: "center", padding: 0 }}>
        <Title>{this.props.title}</Title>
        <Droppable droppableId={this.props.columnId}>
          {(provided) => (
            <PList ref={provided.innerRef} {...provided.droppableProps}>
              {this.props.players.map((player, index) => (
                <PlayerCard
                  key={player.id}
                  player={player}
                  index={index}
                  onPlayerUpdated={(player) => {
                    updatePlayers([player]);
                  }}
                />
              ))}
              {provided.placeholder}
            </PList>
          )}
        </Droppable>
      </Container>
    );
  }
}
