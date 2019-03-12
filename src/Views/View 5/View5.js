import React, { Component } from 'react';
import './View5.css';
import Logo from '../../_components/logo/logo';
import Clock from '../../_components/clock/clock';
import BuildNumber from '../../_components/build-number/build-number';
import Branding from '../../_components/branding/branding';

class View5 extends Component {
  componentWillMount() {
    document.body.style.background = 'black';
  }

  componentWillUnmount() {
    document.body.style.background = null;
  }

  render() {
    return (
      <div className="View5 BlackoutWrapper">
        <div className="row blackout-logo">
          <Logo />
        </div>
        <div className="row">
          <div className="col-12 col-md-12">
            <div className="row blackout-mobile-message">
              <i>Mobile silent please!</i>
            </div>
            <div className="row blackout-clock">
              <Clock />
            </div>
          </div>
        </div>
        <BuildNumber />
        <Branding />
      </div>
    );
  }
}

export default View5;
