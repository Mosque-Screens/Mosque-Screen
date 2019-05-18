import React, { Component } from 'react';
import './logo.css';
import AppConfig from '../app-config/app-config';

class Logo extends Component {
  constructor(props) {
    super(props);
    var _appConfig = new AppConfig();
    this.state = {
      logo: _appConfig.get('Logo_URL')
    };
  }

  render() {
    return (
      <div className="LogoWrapper d-none d-lg-block">
        <img src={this.state.logo} alt="" />
      </div>
    );
  }
}

export default Logo;
