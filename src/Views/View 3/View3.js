import React, { Component } from 'react';
import './View3.css';
import Logo from '../../_components/logo/logo';
import Clock from '../../_components/clock/clock';
import Date from '../../_components/date/date';
import BuildNumber from '../../_components/build-number/build-number';
import NextJammahTime from '../../_components/next-jamah-time/next-jamah-time';
import AdditionalMessage from '../../_components/additional-message/additional-message';
import AppConfig from '../../_components/app-config/app-config';
import Branding from '../../_components/branding/branding';

class View3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _appConfig: new AppConfig()
    };
  }

  componentWillUnmount() {
    this.setState(() => ({
      _appConfig: null
    }));
  }

  render() {
    return (
      <div className="View3">
        <div className="row">
          <Logo />
        </div>
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="row">
              <Clock />
            </div>
            <div className="row">
              <Date />
            </div>
            <div className="row">
              <AdditionalMessage
                message={this.state._appConfig.get('Mobile_Use_Notification')}
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="row">
              <NextJammahTime />
            </div>
          </div>
        </div>
        <BuildNumber />
        <Branding />
      </div>
    );
  }
}

export default View3;
