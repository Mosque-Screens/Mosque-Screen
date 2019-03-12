import React, { Component } from 'react';
import moment from 'moment';
import './clock.css';
import AppConfig from '../app-config/app-config';

class Clock extends Component {
  constructor(props) {
    super(props);
    var _appConfig = new AppConfig();
    var format = _appConfig.get('time_format')
      ? _appConfig.get('time_format')
      : 'h:mm A';

    this.state = {
      time: this.getTime(format),
      format: format
    };
  }

  getTime(format = 'h:mm A') {
    return moment().format(format);
  }

  tick() {
    this.setState(() => ({
      time: this.getTime(this.state.format)
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="ClockWrapper">
        <div className="Clock">{this.state.time}</div>
      </div>
    );
  }
}

export default Clock;
