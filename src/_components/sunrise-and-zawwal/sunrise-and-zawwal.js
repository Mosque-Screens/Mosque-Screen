import React, { Component } from 'react';
import './sunrise-and-zawwal.css';
import moment from 'moment/moment';
import PrayerData from '../prayer-data/prayer-data';

class SunriseAndZawwal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sunrise: this.getSunrise(),
      zawwal: this.getZawwal()
    };
  }

  getTodaysDate() {
    var date = moment().format('DD/MM/YYYY');
    var _data = new PrayerData();
    return _data.getPrayerTimes(date);
  }

  getSunrise() {
    return this.getTodaysDate()['Sunrise'];
  }

  getZawwal() {
    var zuhrTime = this.getTodaysDate()['Zuhr Begins'];
    var zuhrTimeToMoment = moment(zuhrTime, 'h:mm')
      .subtract(10, 'minutes')
      .format('h:mm');
    return zuhrTimeToMoment;
  }

  render() {
    return (
      <div className="SunriseAndZawwalWrapper">
        <table className="SunriseAndZawwalTable">
          <thead>
            <tr>
              <th>Sunrise</th>
              <th>Zawwal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.state.sunrise}</td>
              <td>{this.state.zawwal}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default SunriseAndZawwal;
