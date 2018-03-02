import React, { Component } from 'react';
import './View1.css';
import Logo from '../_components/logo/logo';
import Clock from '../_components/clock/clock';
import PrayerTimes from '../_components/prayer-times/prayer-times';
import Date from '../_components/date/date';
import BuilderNumber from '../_components/build-number/build-number';

class View1 extends Component {
  render() {
    return (
      <div className="View1">
        <Logo />
        <div className="row">
          <div className="w-50">
            <Clock />
            <Date />
          </div>
          <div className="w-50">
            <PrayerTimes />
          </div>
        </div>
        <BuilderNumber />
      </div>
    );
  }
}

export default View1;
