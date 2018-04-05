import React, { Component } from 'react';
import './View3.css';
import Logo from '../_components/logo/logo';
import Clock from '../_components/clock/clock';
import PrayerTimes from '../_components/prayer-times/prayer-times';
import Date from '../_components/date/date';
import BuilderNumber from '../_components/build-number/build-number';
import NextJamahTime from '../_components/next-jamah-time/next-jamah-time';

class View3 extends Component {
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
            <h1>View 3</h1>
          </div>
          <div className="col-12 col-md-6">
            {/*<div className="row">*/}
            {/*<NextJamahTime />*/}
            {/*</div>*/}
            <div className="row">
              <NextJamahTime />
            </div>
          </div>
        </div>
        <BuilderNumber />
      </div>
    );
  }
}

export default View3;
