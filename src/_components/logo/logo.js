import React, { Component } from 'react';
import './logo.css';
import AppConfig from '../app-config/app-config';

class Logo extends Component {
  constructor(props) {
    super(props);
    var _appConfig = new AppConfig();
    this.state = {
      logo: _appConfig.get('Logo_URL'),
      orientation: _appConfig.get('Logo_orientation')
    };
  }

  render() {
    return (
      <div
        className={`LogoWrapper LogoWrapper--${this.state.orientation ??
          'vertical'} d-none d-lg-block`}
      >
        <img src={this.state.logo} alt="" />
      </div>
    );
  }
}

export default Logo;
