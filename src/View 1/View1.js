import React, { Component } from 'react';
import './View1.css';
import Clock from '../_components/clock/clock';

class View1 extends Component {
  render() {
    return (
      <div className="View1">
        <div className="row">
          <div className="w-50">
            <Clock />
          </div>
          <div className="w-50">
            test
          </div>
        </div>
      </div>
    );
  }
}

export default View1;
