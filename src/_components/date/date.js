import React, { Component } from 'react';
import moment from 'moment-hijri';
import './date.css';

class Date extends Component {
  constructor(props) {
    super(props);
    moment.locale('en');
    this.state = {
      date: this.getDate(),
      dayOfWeek: this.getDayOfTheWeek(),
      hijriDate: this.getHijriDate()
    };
  }

  getDate() {
    return moment().format('D MMMM YYYY');
  }

  getDayOfTheWeek() {
    return moment().format('dddd');
  }

  getHijriDate() {
    return moment().format('iD iMMMM iYYYY');
  }

  render() {
    return (
      <div className="DateWrapper">
        <div className="Date">
          <div className="row">{this.state.dayOfWeek}</div>
          <div className="row">{this.state.date}</div>
          <div className="row">{this.state.hijriDate}</div>
        </div>
      </div>
    );
  }
}

export default Date;
