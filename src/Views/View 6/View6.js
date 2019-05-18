import React, { Component } from 'react';
import './View6.css';
import Logo from '../../_components/logo/logo';
import Clock from '../../_components/clock/clock';
import BuildNumber from '../../_components/build-number/build-number';
import Branding from '../../_components/branding/branding';
import HadithOfTheDay from '../../_components/hadith-of-the-day/hadith-of-the-day';

class View6 extends Component {
  render() {
    return (
      <div className="View6">
        <div className="row">
          <Logo />
        </div>
        <div className="row">
          <div className="col-12 col-md-12">
            <div className="row">
              <Clock />
            </div>
          </div>
        </div>
        <div className="row">
          <HadithOfTheDay />
        </div>
        <BuildNumber />
        <Branding />
      </div>
    );
  }
}

export default View6;
