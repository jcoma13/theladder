import React from "react";
import Button from "calcite-react/Button";
import PropTypes from "prop-types";
import { getNewPlayer } from "../utils/helpers";
import { useState } from "react";
import EditablePlayerCard from "./PlayerCard/EditablePlayerCard";

const AddButton = ({ newPlayerId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Button onClick={openModal}>Add Rung</Button>
      {isModalOpen && (
        <EditablePlayerCard
          player={getNewPlayer(newPlayerId)}
          mode="add"
          onCloseModal={closeModal}
        />
      )}
    </div>
  );
};

AddButton.propTypes = {
  onPlayerAdd: PropTypes.func,
};

AddButton.defaultProps = {
  onPlayerAdd: () => {},
};

export default AddButton;
