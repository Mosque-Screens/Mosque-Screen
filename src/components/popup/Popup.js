import React from 'react';
import './style.css';
import Example from '../panes/example';

class Popup extends React.Component {
  render() {
    return (
      <div className="popup">
        <div className="popup\_inner">
          <h1>{this.props.text}</h1>
          <button onClick={this.props.closePopup}>close me</button>
        </div>
        <Example />
      </div>
    );
  }
}

export default Popup;
