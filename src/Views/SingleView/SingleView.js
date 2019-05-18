import React, { Component } from 'react';
import './SingleView.css';
import Logo from '../../_components/logo/logo';
import Clock from '../../_components/clock/clock';
import Date from '../../_components/date/date';
import BuildNumber from '../../_components/build-number/build-number';
import SunriseAndZawwal from '../../_components/sunrise-and-zawwal/sunrise-and-zawwal';
import AdditionalMessage from '../../_components/additional-message/additional-message';
import AppConfig from '../../_components/app-config/app-config';
import Branding from '../../_components/branding/branding';
import PrayerTimesSingleView from '../../_components/prayer-times-single-view/prayer-times-single-view';
import JummahTimes from '../../_components/jummah-times/jummah-times';

class SingleView extends Component {
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
      <div className="SingleView">
        <div className="row">
          <Logo />
        </div>
        <div className="row">
          <div className="col-12 col-md-3">
            <div className="row">
              <Clock />
            </div>
            <div className="row">
              <Date />
            </div>
            <div className="row">
              <AdditionalMessage
                message={this.state._appConfig.get('SingleView_Message')}
              />
            </div>
          </div>
          <div className="col-12 col-md-9">
            <div className="row">
              <PrayerTimesSingleView />
            </div>
            <div className="row">
              <SunriseAndZawwal />
            </div>
            <div className="row">
              <JummahTimes />
            </div>
          </div>
        </div>
        <BuildNumber />
        <Branding />
      </div>
    );
  }
}

export default SingleView;
