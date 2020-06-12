import Card, { CardTitle, CardContent, CardImage } from "calcite-react/Card";
import React, { Component } from "react";

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
      height = feet + "ft. " + inchesFormatted + " inches";
    }

    //TODO: set record color based on wins vs losses
    let recordColor = "blue";

    //TODO: Format record text
    let record = "TBD";

    return (
      <Card bar="blue" style={{ margin: "0 480px", flex: "1 1 20%" }}>
        <CardContent>
          <CardTitle>{name}</CardTitle>
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
    return " todo... editable";
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
