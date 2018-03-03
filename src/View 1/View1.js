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
            <h1>View 1</h1>
          </div>
          <div className="col-12 col-md-6">
            <PrayerTimes />
          </div>
        </div>
        <BuilderNumber />
      </div>
    );
  }
}

export default View1;
