import React, { Component } from 'react';
import './View1.css';
import Logo from '../../_components/logo/logo';
import Clock from '../../_components/clock/clock';
import PrayerTimes from '../../_components/prayer-times/prayer-times';
import Date from '../../_components/date/date';
import BuildNumber from '../../_components/build-number/build-number';
import SunriseAndZawwal from '../../_components/sunrise-and-zawwal/sunrise-and-zawwal';
import AdditionalMessage from '../../_components/additional-message/additional-message';
import AppConfig from '../../_components/app-config/app-config';
import Branding from '../../_components/branding/branding';

class View1 extends Component {
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
      <div className="View1">
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
                message={this.state._appConfig.get('Text_Donate_Message')}
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="row">
              <PrayerTimes />
            </div>
            <div className="row">
              <SunriseAndZawwal />
            </div>
          </div>
        </div>
        <BuildNumber />
        <Branding />
      </div>
    );
  }
}

export default View1;
