import React from "react";
import Button from "calcite-react/Button";
import Modal from "calcite-react/Modal";
import PlayerCard from "./PlayerCard/PlayerCard";
import PropTypes from "prop-types";
import {getNewPlayer} from "../utils/helpers";

class AddButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
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

  handlePlayerUpdated = player => {
    //is it edit or add (add=add, otherwise, override settings of method)
    this.props.onPlayerAdd(player);
    this.closeModal();
  };

  render() {
    const docsModalZIndex = { zIndex: 1001 };

    return (
      <div>
        <Button onClick={this.openModal}>Add Rung</Button>
        <Modal
          open={this.state.open}
          onRequestClose={this.closeModal}
          appElement={document.body}
          overlayStyle={docsModalZIndex}
          title="New Player"
          secondaryActions={
            <Button
              key="cancel"
              onClick={this.closeModal}
              clearGray
              iconPosition="before"
            >
              Cancel
            </Button>
          }
        >
          <PlayerCard
            player={getNewPlayer(this.state.players.length)}
            mode="editable"
            onPlayerAdd={this.handlePlayerAdd}
          />
        </Modal>
      </div>
    );
  }
}

AddButton.propTypes = {
  onPlayerAdd: PropTypes.func,
};

AddButton.defaultProps = {
  onPlayerAdd: () => {},
};

export default AddButton;
