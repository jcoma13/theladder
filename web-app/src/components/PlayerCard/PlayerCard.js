import Card, { CardTitle, CardContent, CardImage } from "calcite-react/Card";
import React, { Component } from "react";
import TextField from 'calcite-react/TextField';
import Select from 'calcite-react/Select';
import Slider from 'calcite-react/Slider'
import Form, {
    FormControl,
    FormControlLabel,
    FormHelperText,
    Fieldset,
    Legend
  } from 'calcite-react/Form'
import Menu, { MenuTitle, MenuItem } from 'calcite-react/Menu';
import Button, { ButtonGroup } from 'calcite-react/Button';

class PlayerCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "readOnly",
    };
  }

  getReadOnlyCard() {
    const { name, plays, backhand, wins, losses, feet, inches } = this.props;
    var height;
    if (feet === null || height === "") {
      height = "N/A";
    } else {
      const inchesFormatted = inches ? inches : 0;
      height = feet + "' " + inchesFormatted + '"';
    }

    //TODO: set record color based on wins vs losses
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

    //TODO: Format record text
    let record = "TBD";
    if (wins === null && losses === null) {
        record = "TBD"
    } else if (wins === null) {
        record = "Enter # of wins";
    } else if (losses === null) {
        record = "Enter # of losses"
    } else {
        record = wins + "-" + losses;
    }

    return (
      <Card bar="blue" style={{ margin: "0 710px", flex: "1 1 20%" }}>
        <CardContent>
          <CardTitle>{name}</CardTitle>
          <Button onClick={() => this.setState({mode: "editable"})}>Edit</Button>
          <p>
            <li>height: {height}</li>
            <li>plays: {plays}</li>
            <li>backhand: {backhand}</li>
            <li>
              record: <span style={{ color: recordColor }}>{record}</span>
            </li>
          </p>
        </CardContent>
      </Card>
    );
  }

  getEditableCard() {
    //TODO editable card ;-)
    return (
        <div>
        <TextField id="name" defaultValue={this.props.name} />

        {/* height (feet)  */}
        <Slider
            min={0}
            max={8}
        />
        {/* height (inches) */}
        <Slider
            min={0}
            max={12}
        /> 

        <Select
            onChange={this.handleSelectChange}
            selectedValue={this.state.selectedValue}
        >
            <MenuItem>right-handed</MenuItem>
            <MenuItem>left-handed</MenuItem>
        </Select>
        
        <Select
            onChange={this.handleSelectChange}
            selectedValue={this.state.selectedValue}
        >
            <MenuItem>one-handed</MenuItem>
            <MenuItem>two-handed</MenuItem>
        </Select>

        {/* wins */}
        <TextField id="name" defaultValue={this.props.wins} />
        {/* losses */}
        <TextField id="name" defaultValue={this.props.losses} />
        {/* button to switch state */}
        <Button onClick={() => this.setState({mode: "readOnly"})}>Save</Button>
        </div>
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
