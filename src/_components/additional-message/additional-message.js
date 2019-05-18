import React, { Component } from 'react';
import './additional-message.css';

class AdditionalMessage extends Component {
  constructor(props) {
    super(props);
    this.state = { message: { __html: props.message } };
  }

  render() {
    return (
      <div
        className="AdditionalMessageWrapper"
        dangerouslySetInnerHTML={this.state.message}
      />
    );
  }
}

export default AdditionalMessage;
