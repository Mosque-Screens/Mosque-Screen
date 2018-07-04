import React, { Component } from 'react';
import './View3.css';
import Logo from '../_components/logo/logo';
import Clock from '../_components/clock/clock';
import Date from '../_components/date/date';
import BuildNumber from '../_components/build-number/build-number';
import NextJamahTime from '../_components/next-jamah-time/next-jamah-time';
import AdditionalMessage from '../_components/additional-message/additional-message';

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
            <div className="row">
              <AdditionalMessage
                message="
                                    <p><i>Please ensure your</i></p>
                                    <p><i>mobile phone is silent</i></p>
                                    <p><i>in the prayer hall</i></p>
                                "
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="row">
              <NextJamahTime />
            </div>
          </div>
        </div>
        <BuildNumber />
      </div>
    );
  }
}

export default View3;
