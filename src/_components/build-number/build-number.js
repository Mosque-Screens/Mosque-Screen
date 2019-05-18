import React, { Component } from 'react';
import './build-number.css';
import config from '../../config.json';

class BuildNumber extends Component {
  constructor(props) {
    super(props);
    this.state = { buildNumber: config.buildNumber };
  }
  render() {
    return <div className="BuildNumberWrapper">{this.state.buildNumber}</div>;
  }
}

export default BuildNumber;
