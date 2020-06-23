import Card, { CardTitle, CardContent, CardImage } from "calcite-react/Card";
import React, { Component } from "react";
import TextField from 'calcite-react/TextField';
import Select from 'calcite-react/Select';
import Slider from 'calcite-react/Slider'
import MenuItem from 'calcite-react/Menu';
import Button from 'calcite-react/Button';

class PlayerCard extends Component {
  constructor(props) {
    super(props);
    const { name, plays, backhand, wins, losses, feet, inches, mode } = props;
    this.state = {
      name, 
      plays, 
      backhand, 
      wins, 
      losses, 
      feet, 
      inches,
      mode: mode ? mode : 'readOnly',
    }
  }

  updateName = (event) => {
    this.setState({name: event.target.value})
  }

  updateFeetSliderValue = (event) => {
    this.setState({ feet: parseInt(event.target.value, 10) })
  }

  updateInchesSliderValue = (event) => {
    this.setState({ inches: parseInt(event.target.value, 10) })
  }

  handlePlaysSelectChange = (value) => {
    this.setState({ plays: value})
  }

  handleBackhandSelectChange = (value) => {
    this.setState({ backhand: value})
  }

  handleWinsSelectChange = (event) => {
    this.setState({ wins: event.target.value})
  }

  handleLossesSelectChange = (event) => {
    this.setState({ losses: event.target.value})
  }

  getReadOnlyCard() {
    const { name, plays, backhand, wins, losses, feet, inches } = this.state;
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
      <Card bar="blue" >
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
      <div style={{display: "flex", flexDirection:"column"}}>
      {/* name */}
      <TextField id="name" value={this.state.name} onChange={this.updateName}/>
      
      {/* height (feet)  */}
      <Slider
          min={0}
          max={8}
          value = {this.state.feet}
          onChange={this.updateFeetSliderValue}
      />
      <div>{this.state.feet + "'"}</div>

      {/* height (inches) */}
      <Slider
          min={0}
          max={11}
          value = {this.state.inches}
          onChange={this.updateInchesSliderValue}
      /> 
      <div>{this.state.inches + '"'}</div>

      {/* plays (handedness) */}
      <Select
        onChange={this.handlePlaysSelectChange}
        selectedValue={this.state.plays}
      >
        <MenuItem value="right-handed">Right-Handed</MenuItem>
        <MenuItem value="left-handed">Left-Handed</MenuItem>
      </Select>
      
      {/* backhand type */}
      <Select
          onChange={this.handleBackhandSelectChange}
          selectedValue={this.state.backhand}
      >
          <MenuItem value="one-handed">One-Handed</MenuItem>
          <MenuItem value="two-handed">Two-Handed</MenuItem>
      </Select>

      {/* wins */}
      <TextField id="name" value={this.state.wins} onChange=
      {this.handleWinsSelectChange} />

      {/* losses */}
      <TextField id="name" value={this.state.losses} onChange=
      {this.handleLossesSelectChange} />

      {/* button to switch state */}
      <Button onClick={() => 
        {
          const { name, plays, backhand, wins, losses, feet, inches } = this.state;
          if(this.props.onPlayerUpdated) {
            this.props.onPlayerUpdated({name, plays, backhand, wins, losses, feet, 
              inches});
          } 
          this.setState({mode: "readOnly"})}}>Save</Button>
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
