import React from "react";
import Button from "calcite-react/Button";
import Modal from "calcite-react/Modal";
import PlayerCard from "./PlayerCard/PlayerCard";
import PropTypes from "prop-types";

class EditButton extends React.Component {
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
    this.props.onPlayerAdd(player);
    this.closeModal();
  };

  render() {
    const docsModalZIndex = { zIndex: 1001 };

    return (
      <div>
        <Button extraSmall onClick={this.openModal}>
          Edit
        </Button>
        <Modal
          open={this.state.open}
          onRequestClose={this.closeModal}
          appElement={document.body}
          overlayStyle={docsModalZIndex}
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
            player={this.props.player}
            mode="editable"
            onPlayerUpdated={this.handlePlayerUpdated}
          />
        </Modal>
      </div>
    );
  }
}

EditButton.propTypes = {
  onPlayerAdd: PropTypes.func,
};

EditButton.defaultProps = {
  onPlayerAdd: () => {},
};

export default EditButton;
