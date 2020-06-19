import React from "react";
import Button, { ButtonGroup } from "calcite-react/Button";
import Modal from "calcite-react/Modal";
import PlayerCard from "./PlayerCard/PlayerCard";

class AddButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // name,
      // plays,
      // backhand,
      // wins,
      // losses,
      // feet,
      // inches,
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

  updateName = (event) => {
    this.setState({ name: event.target.value });
  };

  updateFeetSliderValue = (event) => {
    this.setState({ feet: parseInt(event.target.value, 10) });
  };

  updateInchesSliderValue = (event) => {
    this.setState({ inches: parseInt(event.target.value, 10) });
  };

  handlePlaysSelectChange = (value) => {
    this.setState({ plays: value });
  };

  handleBackhandSelectChange = (value) => {
    this.setState({ backhand: value });
  };

  handleWinsSelectChange = (event) => {
    this.setState({ wins: event.target.value });
  };

  handleLossesSelectChange = (event) => {
    this.setState({ losses: event.target.value });
  };

  handlePlayerUpdated = (player) => {
    this.closeModal();
    console.log("clicked");
  };

  render() {
    // For the purpose of this example, we need to set a custom z-index on
    // the modal so it doesn't interfere with the side panel
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
            mode="editable"
            onPlayerUpdated={this.handlePlayerUpdated}
          />
        </Modal>
      </div>
    );
  }
}

export default AddButton;
