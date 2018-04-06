import React, { Component } from 'react';
import './View4.css';
import Logo from '../_components/logo/logo';
import Clock from '../_components/clock/clock';
import BuilderNumber from '../_components/build-number/build-number';
import PrayerTimesWeekAhead from '../_components/prayer-times-week-ahead/prayer-times-week-ahead';

class View4 extends Component {
  render() {
    return (
      <div className="View4">
        <div className="row">
          <Logo />
        </div>
        <div className="row">
          <div className="col-12 col-md-12">
            <div className="row">
              <Clock />
            </div>
            <div className="row">
              <PrayerTimesWeekAhead />
            </div>
          </div>
        </div>
        <BuilderNumber />
      </div>
    );
  }
}

export default View4;
