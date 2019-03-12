import React, { Component } from 'react';
import './prayer-times.css';
import PrayerData from '../prayer-data/prayer-data';

class PrayerTimes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prayerTimes: this.getPrayerTimes()
    };
  }

  getPrayerTimes() {
    var _data = new PrayerData();
    return _data.getPrayerTimes();
  }

  render() {
    return (
      <div className="PrayerTimeWrapper">
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
