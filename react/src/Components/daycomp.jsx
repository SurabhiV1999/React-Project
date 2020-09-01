import React, { Component } from "react";

class DayComp extends Component {
  state = {
    bgClour: "black",
  };
  isDisabled = () => {
    return this.props.value > this.props.inputLen + 1;
  };
  buttonColour = () => {
    if (this.props.val === this.props.value) return "#99bbff";
    return "black";
  };

  render() {
    return (
      <div>
        <button
          type="button"
          id="days"
          className="btn primary btn-dark"
          style={{ display: "inline", backgroundColor: this.buttonColour() }}
          onClick={() => this.props.handleDisplay(this.props.value)}
          disabled={this.isDisabled()}
          //onBlur={this.buttonColour}
        >
          Day {this.props.value}
        </button>
      </div>
    );
  }
}

export default DayComp;
