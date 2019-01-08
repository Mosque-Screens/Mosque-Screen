import React, { Component } from 'react';
import moment from 'moment';
import './prayer-times.css';
import data from '../../_assets/data/elm-prayer-times-2019.json';

class PrayerTimes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prayerTimes: this.getPrayerTimes()
    };
  }

  getPrayerTimes() {
    var date = moment().format('DD/MM/YYYY');
    return data[date];
  }

  render() {
    return (
      <div className="NextJamahTimeWrapper">
        <table className="PrayerTimes">
          <thead>
            <tr>
              <th />
              <th />
              <th>Begins</th>
              <th>Jama'ah</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Fajr</th>
              <td />
              <td>{this.state.prayerTimes['Fajr Begins']}</td>
              <td>{this.state.prayerTimes['Fajr Jama‘ah']}</td>
            </tr>
            <tr>
              <th>Zuhr</th>
              <td />
              <td>{this.state.prayerTimes['Zuhr Begins']}</td>
              <td>{this.state.prayerTimes['Zuhr Jama‘ah']}</td>
            </tr>
            <tr>
              <th rowSpan="2">'Asr</th>
              <td className="mithl-text">mithl 1</td>
              <td>{this.state.prayerTimes['Asr Mithl 1']}</td>
              <td rowSpan="2">{this.state.prayerTimes['Asr Jama‘ah']}</td>
            </tr>
            <tr>
              <td className="mithl-text">mithl 2</td>
              <td className="normal-text">
                {this.state.prayerTimes['Asr Mithl 2']}
              </td>
            </tr>
            <tr>
              <th>Maghrib</th>
              <td />
              <td>{this.state.prayerTimes['Maghrib Begins']}</td>
              <td>{this.state.prayerTimes['Maghrib Jama‘ah']}</td>
            </tr>
            <tr>
              <th>Isha</th>
              <td />
              <td>{this.state.prayerTimes['Isha Begins']}</td>
              <td>{this.state.prayerTimes['Isha Jama‘ah']}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default PrayerTimes;
