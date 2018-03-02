import React, { Component } from 'react';
import './prayer-times.css';

class PrayerTimes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prayerTimes: this.getPrayerTimes()
    };
  }

  getPrayerTimes() {
    return {
      Date: '17/01/2018',
      'Fajr Begins': '6:18',
      'Fajr Jama‘ah': '6:48',
      Sunrise: '7:55',
      'Zuhr Begins': '12:16',
      'Zuhr Jama‘ah': '12:45',
      'Asr Mithl 1': '2:04',
      'Asr Mithl 2': '2:37',
      'Asr Jama‘ah': '3:00',
      'Maghrib Begins': '4:27',
      'Maghrib Jama‘ah': '4:32',
      'Isha Begins': '6:04',
      'Isha Jama‘ah': '7:15'
    };
  }

  render() {
    return (
      <div className="PrayerTimesWrapper">
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
              <td>{this.state.prayerTimes['Asr Jama‘ah']}</td>
            </tr>
            <tr>
              <td className="mithl-text">mithl 2</td>
              <td>{this.state.prayerTimes['Asr Mithl 2']}</td>
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
