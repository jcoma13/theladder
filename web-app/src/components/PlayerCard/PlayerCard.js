import Card, { CardTitle, CardContent } from "calcite-react/Card";
import React, { useState } from "react";
import Button from "calcite-react/Button";
import EditAttributesIcon from "calcite-ui-icons-react/EditAttributesIcon";
import { Move } from "react-bytesize-icons";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import PropTypes from "prop-types";
import DeleteButton from "../DeleteButton";
import EditablePlayerCard from "./EditablePlayerCard";

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 0px;
  margin-bottom: 8px;
  background-color: white;
`;

const PlayerCard = ({
  player,
  onPlayerUpdated,
  onPlayerDelete,
  index,
  ...props
}) => {
  // const [player, setPlayer] = useState(props.player);
  const [mode, setMode] = useState("readOnly");

  const handleDelete = () => {
    onPlayerDelete(player.id);
  };

  const openModal = () => {
    setMode("editable");
  };

  const closeModal = () => {
    setMode("readOnly");
  };

  //   return (
  //     <Modal
  //       open={true}
  //       onRequestClose={closeModal}
  //       appElement={document.body}
  //       overlayStyle={docsModalZIndex}
  //       secondaryActions={
  //         <Button
  //           key="cancel"
  //           onClick={() => {
  //             setMode("readOnly");
  //           }}
  //           clearGray
  //           iconPosition="before"
  //         >
  //           Cancel
  //         </Button>
  //       }
  //     >
  //       {cardInfo}
  //     </Modal>
  //   );
  // };

  const { name, plays, backhand, wins, losses, feet, inches } = player;
  var height;
  if (feet === null || height === "") {
    height = "N/A";
  } else {
    const inchesFormatted = inches ? inches : 0;
    height = feet + "' " + inchesFormatted + '"';
  }

  var recordColor = "blue";
  if (wins === null || losses === null) {
    recordColor = "orange";
  } else if (wins > losses) {
    recordColor = "green";
  } else if (wins < losses) {
    recordColor = "red";
  } else {
    recordColor = "blue";
  }

  let record = "TBD";
  if (wins === null && losses === null) {
    record = "TBD";
  } else if (wins === null) {
    record = "Enter # of wins";
  } else if (losses === null) {
    record = "Enter # of losses";
  } else {
    record = wins + "-" + losses;
  }

  return (
    <>
      <Draggable draggableId={String(player.id)} index={index}>
        {(provided) => (
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <Card
              bar="blue"
              style={{ maxWidth: "375px", textAlign: "center", padding: 0 }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Move width={12} height={12} />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                <DeleteButton confirmDelete={handleDelete} />
              </div>
              <CardContent style={{ margin: -8 }}>
                <CardTitle>
                  {name}
                  <Button
                    iconButton
                    icon={<EditAttributesIcon size={15} />}
                    onClick={openModal}
                  />
                </CardTitle>
                {height} :: {plays} :: {backhand} backhand
                <span style={{ color: recordColor }}>{record}</span>
              </CardContent>
            </Card>
          </Container>
        )}
      </Draggable>
      {mode === "editable" ? (
        <EditablePlayerCard
          player={player}
          onCloseModal={closeModal}
          onConfirm={onPlayerUpdated}
        />
      ) : null}
    </>
  );
};

PlayerCard.propTypes = {
  onPlayerUpdated: PropTypes.func,
};

PlayerCard.defaultProps = {
  onPlayerUpdated: () => {},
};

export default PlayerCard;
