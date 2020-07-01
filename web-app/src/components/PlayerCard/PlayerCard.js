import Card, { CardTitle, CardContent } from "calcite-react/Card";
import React, { Component } from "react";
import TextField from "calcite-react/TextField";
import Select from "calcite-react/Select";
import Slider from "calcite-react/Slider";
import MenuItem from "calcite-react/Menu";
import Button from "calcite-react/Button";
import Form, { FormControl } from "calcite-react/Form";
import Modal from "calcite-react/Modal";
import EditButton from "../EditButton";
// import { FaEdit } from "react-icons/fa";

class PlayerCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerId: props.player.id,
      name: props.player.name,
      plays: props.player.plays,
      backhand: props.player.backhand,
      wins: props.player.wins,
      losses: props.player.losses,
      // conditional statement to check if there is a given height (feet) for player
      feet: props.player.feet ? props.player.feet : 0,
      // conditional statement to check if there is a given height (in.) for player
      inches:
        props.player.inches || props.player.inches === 0
          ? props.player.inches
          : 0,
      mode: props.player.mode ? props.player.mode : "readOnly",
    };
  }

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

  getReadOnlyCard() {
    const { name, plays, backhand, wins, losses, feet, inches } = this.state;
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

    const indexOf = (array, player) => {
      for (var i = 0; i < array.length; i++) {
        if (array[i] === player) {
          console.log(i);
          return i;
        }
      }
      // method that gets index of card
    };

    return (
      <Card
        bar="blue"
        style={{ maxWidth: "375px", textAlign: "center", padding: 0 }}
      >
        <CardContent>
          {/* use indexOf method here next to name */}
          <CardTitle>
            {name}
            {/* <Button
              iconButton
              icon={<FaEdit size={15} />}
              onClick={() => this.setState({mode: "editable"})}/> */}
          </CardTitle>
          {/* <EditButton /> */}
          <Button extraSmall onClick={() => this.setState({mode: "editable"})}>Edit</Button>
          {height} :: {plays} :: {backhand} backhand
          <span style={{ color: recordColor }}>{record}</span>
        </CardContent>
      </Card>
    );
  }

  getEditableCard() {
    const docsModalZIndex = { zIndex: 1001 };
    return (
      <Modal
          open={this.state.mode === "editable"}
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
      <div>
        {/* name */}
        <div>Name:</div>
        <TextField
          placeholder="ex: Jansen Comadena"
          id="name"
          value={this.state.name}
          onChange={this.updateName}
        />

        {/* height (feet)  */}
        <div>Feet:</div>
        <Form horizontal>
          <TextField
            type="number"
            value={this.state.feet}
            onChange={this.updateFeetSliderValue}
          />
          <FormControl style={{ flex: "1 0 100px" }}>
            <Slider
              min={0}
              max={8}
              value={this.state.feet}
              onChange={this.updateFeetSliderValue}
            />
          </FormControl>
        </Form>

        {/* height (inches) */}
        <div>Inches:</div>
        <Form horizontal>
          <TextField
            type="number"
            value={this.state.inches}
            onChange={this.updateInchesSliderValue}
          />
          <FormControl style={{ flex: "1 0 100px" }}>
            <Slider
              min={0}
              max={11}
              value={this.state.inches}
              onChange={this.updateInchesSliderValue}
            />
          </FormControl>
        </Form>

        {/* plays (handedness) */}
        <div>Handedness:</div>
        <Select
          onChange={this.handlePlaysSelectChange}
          selectedValue={this.state.plays}
        >
          <MenuItem value="right-handed">Right-Handed</MenuItem>
          <MenuItem value="left-handed">Left-Handed</MenuItem>
        </Select>

        {/* backhand type */}
        <div>Backhand type:</div>
        <Select
          onChange={this.handleBackhandSelectChange}
          selectedValue={this.state.backhand}
        >
          <MenuItem value="one-handed">One-Handed</MenuItem>
          <MenuItem value="two-handed">Two-Handed</MenuItem>
        </Select>

        {/* wins */}
        <div># of wins:</div>
        <TextField
          placeholder="ex: 8"
          id="name"
          value={this.state.wins}
          onChange={this.handleWinsSelectChange}
        />

        {/* losses */}
        <div># of losses:</div>
        <TextField
          placeholder="ex: 5"
          id="name"
          value={this.state.losses}
          onChange={this.handleLossesSelectChange}
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
            } = this.state;
            if (this.props.onPlayerUpdated) {
              this.props.onPlayerUpdated({
                id: this.state.playerId,
                name,
                plays,
                backhand,
                wins,
                losses,
                feet,
                inches,
              });
            }
            this.setState({ mode: "readOnly" });
          }}
        >
          Save
        </Button>

      </div>
      </Modal>
    );
  }

  render() {
    if (this.state.mode === "readOnly") {
      return this.getReadOnlyCard();
    } else if (this.state.mode === "editable") {
      return this.getEditableCard();
    }
    return "unhandled mode" + this.state.mode;
  }
}

export default PlayerCard;
