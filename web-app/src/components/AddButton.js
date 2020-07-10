import React from "react";
import Button from "calcite-react/Button";
import PlayerCard from "./PlayerCard/PlayerCard";
import PropTypes from "prop-types";
import { getNewPlayer } from "../utils/helpers";

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
    this.props.onPlayerAdd(player);
    this.closeModal();
  };

  render() {
    return (
      <div>
        <Button onClick={this.openModal}>Add Rung</Button>
        {this.state.open && (<PlayerCard
              player={getNewPlayer(this.props.newPlayerId)}
              mode="editable"
              onPlayerUpdated={this.handlePlayerUpdated}
              isModal={true}
              onPlayerUpdateCancel={this.closeModal}
              />)}
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
