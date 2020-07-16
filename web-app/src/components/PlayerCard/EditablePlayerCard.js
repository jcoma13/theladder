// Framework and third-party non-ui
import React, { useState } from "react";
import Button from "calcite-react/Button";
import Modal from "calcite-react/Modal";
import TextField from "calcite-react/TextField";
import Select from "calcite-react/Select";
import Slider from "calcite-react/Slider";
import MenuItem from "calcite-react/Menu";
import Form, { FormControl } from "calcite-react/Form";

const EditablePlayerCard = ({ onCloseModal, onConfirm, ...props }) => {
  const [player, setPlayer] = useState(props.player);

  const updateName = (event) => {
    setPlayer({ ...player, name: event.target.value });
  };

  const updateFeetSliderValue = (event) => {
    setPlayer({ ...player, feet: parseInt(event.target.value, 10) });
  };

  const updateInchesSliderValue = (event) => {
    setPlayer({ ...player, inches: parseInt(event.target.value, 10) });
  };

  const handlePlaysSelectChange = (value) => {
    setPlayer({ ...player, plays: value });
  };

  const handleBackhandSelectChange = (value) => {
    setPlayer({ ...player, backhand: value });
  };

  const handleWinsSelectChange = (event) => {
    setPlayer({ ...player, wins: event.target.value });
  };

  const handleLossesSelectChange = (event) => {
    setPlayer({ ...player, losses: event.target.value });
  };

  const docsModalZIndex = {
    zIndex: 1001,
  };

  return (
    <Modal
      open={true}
      onRequestClose={onCloseModal}
      appElement={document.body}
      overlayStyle={docsModalZIndex}
      secondaryActions={
        <Button
          key="cancel"
          onClick={onCloseModal}
          clearGray
          iconPosition="before"
        >
          Cancel
        </Button>
      }
    >
      <div>
        {/* name */} <div> Name: </div>
        <TextField
          placeholder="ex: Jansen Comadena"
          id="name"
          value={player.name}
          onChange={updateName}
        />
        {/* height (feet)  */} <div> Feet: </div>
        <Form horizontal>
          <TextField
            type="number"
            value={player.feet}
            onChange={updateFeetSliderValue}
          />
          <FormControl
            style={{
              flex: "1 0 100px",
            }}
          >
            <Slider
              min={0}
              max={8}
              value={player.feet}
              onChange={updateFeetSliderValue}
            />
          </FormControl>
        </Form>
        {/* height (inches) */} <div> Inches: </div>
        <Form horizontal>
          <TextField
            type="number"
            value={player.inches}
            onChange={updateInchesSliderValue}
          />
          <FormControl
            style={{
              flex: "1 0 100px",
            }}
          >
            <Slider
              min={0}
              max={11}
              value={player.inches}
              onChange={updateInchesSliderValue}
            />
          </FormControl>
        </Form>
        {/* plays (handedness) */} <div> Handedness: </div>
        <Select onChange={handlePlaysSelectChange} selectedValue={player.plays}>
          <MenuItem value="right-handed"> Right - Handed </MenuItem>
          <MenuItem value="left-handed"> Left - Handed </MenuItem>
        </Select>
        {/* backhand type */} <div> Backhand type: </div>
        <Select
          onChange={handleBackhandSelectChange}
          selectedValue={player.backhand}
        >
          <MenuItem value="one-handed"> One - Handed </MenuItem>
          <MenuItem value="two-handed"> Two - Handed </MenuItem>
        </Select>
        {/* wins */} <div> # of wins: </div>
        <TextField
          placeholder="ex: 8"
          type="number"
          value={player.wins}
          onChange={handleWinsSelectChange}
        />
        {/* losses */} <div> # of losses: </div>
        <TextField
          placeholder="ex: 5"
          value={player.losses}
          onChange={handleLossesSelectChange}
        />
        {/* button to switch state */}
        <Button
          onClick={() => {
            const {
              name,
              plays,
              backhand,
              wins,
              losses,
              feet,
              inches,
            } = player;
            onConfirm({
              id: player.id,
              name,
              plays,
              backhand,
              wins,
              losses,
              feet,
              inches,
            });
            onCloseModal();
          }}
        >
          Save
        </Button>
      </div>
    </Modal>
  );
};

EditablePlayerCard.propTypes = {};

EditablePlayerCard.defaultProps = {};

export default EditablePlayerCard;
