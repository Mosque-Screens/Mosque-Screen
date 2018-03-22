import React, { Component } from 'react';
import './additional-message.css';

class AdditionalMessage extends Component {
  constructor(props) {
    super(props);
    this.state = { message: props.message };
  }

  render() {
    return <div className="AdditionalMessageWrapper">{this.state.message}</div>;
  }
}

export default AdditionalMessage;
