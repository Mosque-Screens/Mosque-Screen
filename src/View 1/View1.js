import React, { Component } from 'react';
import './View1.css';
import Clock from '../_components/clock/clock';

class View1 extends Component {
  render() {
    return (
      <div className="View1">
        <div>
          Left Side
          <Clock />
        </div>
        <div>
          Right Side
          <Clock />
        </div>
      </div>
    );
  }
}

export default View1;
