import React, { Component } from 'react';
import './logo.css';
import logo from './assets/ELM-logo-notext-white.gif';

class Logo extends Component {
  render() {
    return (
      <div className="LogoWrapper">
        <img src={logo} alt="logo" />
      </div>
    );
  }
}

export default Logo;
