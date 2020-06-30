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

//     <Modal
//       open={true}
//       onRequestClose={this.closeModal}
//       appElement={document.body}
//       overlayStyle={1001}
//       secondaryActions={
//         <Button
//           key="cancel"
//           onClick={this.closeModal}
//           clearGray
//           iconPosition="before"
//         >
//           Cancel
//         </Button>
//       }
//     >
//   {/* name */}
//   <TextField placeholder ="Enter name" id="name" value={this.state.name}
//   onChange={this.updateName}/>

//   {/* height (feet)  */}
//   <Slider
//       min={0}
//       max={8}
//       value = {this.state.feet}
//       onChange={this.updateFeetSliderValue}
//   />
//   <div>{this.state.feet + "'"}</div>

//   {/* height (inches) */}
//   <Slider
//       min={0}
//       max={11}
//       value = {this.state.inches}
//       onChange={this.updateInchesSliderValue}
//   />
//   <div>{this.state.inches + '"'}</div>

//   {/* plays (handedness) */}
//   <div>
//     Handedness:
//   </div>
//   <Select
//     onChange={this.handlePlaysSelectChange}
//     selectedValue={this.state.plays}
//   >
//     <MenuItem value="right-handed">Right-Handed</MenuItem>
//     <MenuItem value="left-handed">Left-Handed</MenuItem>
//   </Select>

//   {/* backhand type */}
//   <div>
//     Backhand type:
//   </div>
//   <Select
//       onChange={this.handleBackhandSelectChange}
//       selectedValue={this.state.backhand}
//   >
//       <MenuItem value="one-handed">One-Handed</MenuItem>
//       <MenuItem value="two-handed">Two-Handed</MenuItem>
//   </Select>

//   {/* wins */}
//   <div>
//     # of wins:
//   </div>
//   <TextField placeholder="Enter # of wins" id="name" value={this.state.wins}
//   onChange={this.handleWinsSelectChange} />

//   {/* losses */}
//   <div>
//     # of losses:
//   </div>
//   <TextField placeholder="Enter # of losses" id="name" value={this.state.losses}
//   onChange={this.handleLossesSelectChange} />

//   {/* button to switch state */}
//   <Button onClick={() =>
//     {
//       const { name, plays, backhand, wins, losses, feet, inches } = this.state;
//       if(this.props.onPlayerUpdated) {
//         this.props.onPlayerUpdated({name, plays, backhand, wins, losses, feet,
//           inches});
//       }
//       this.setState({mode: "readOnly"})}}>Save</Button>
//   </Modal>
