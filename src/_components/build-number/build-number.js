import React, { Component } from 'react';
import './build-number.css';

class BuilderNumber extends Component {
  constructor(props) {
    super(props);
    this.state = { builderNumber: 'v.10' };
  }
  render() {
    return <div className="BuildNumberWrapper">{this.state.builderNumber}</div>;
  }
}

export default BuilderNumber;
