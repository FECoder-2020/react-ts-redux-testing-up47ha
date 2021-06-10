import React, { Component } from "react";

import "./spinner.css";

interface SpinnerProps{
  show: boolean;
  color: string;
}

export class Spinner extends Component <SpinnerProps>{

  public props
  render() {
    return (
      <div
        hidden={!this.props.show}
        className="spinner">
        <svg viewBox="0 0 50 50">
          <circle className="path" cx="25" cy="25" r="20"
            fill="none" 
            stroke={this.props.color || "#808080EE"}
            strokeWidth="5">
          </circle>
        </svg>

      </div>
    );
  }
}

export default Spinner;