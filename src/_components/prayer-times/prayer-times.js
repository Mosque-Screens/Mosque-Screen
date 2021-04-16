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

  getAsrRows() {
    if (
      this.state.prayerTimes['asr_1_begins'] &&
      !this.state.prayerTimes['asr_2_begins']
    ) {
      return (
        <tr>
          <th>Asr</th>
          <td />
          <td>{this.state.prayerTimes['asr_1_begins']}</td>
          <td>{this.state.prayerTimes['asr_jamaah']}</td>
        </tr>
      );
    } else if (
      this.state.prayerTimes['asr_2_begins'] &&
      !this.state.prayerTimes['asr_1_begins']
    ) {
      return (
        <tr>
          <th>Asr</th>
          <td />
          <td>{this.state.prayerTimes['asr_2_begins']}</td>
          <td>{this.state.prayerTimes['asr_jamaah']}</td>
        </tr>
      );
    } else {
      return [
        <tr key="asr1">
          <th rowSpan="2">'Asr</th>
          <td className="mithl-text">mithl 1</td>
          <td>{this.state.prayerTimes['asr_1_begins']}</td>
          <td rowSpan="2">{this.state.prayerTimes['asr_jamaah']}</td>
        </tr>,
        <tr key="asr2">
          <td className="mithl-text">mithl 2</td>
          <td className="normal-text">
            {this.state.prayerTimes['asr_2_begins']}
          </td>
        </tr>
      ];
    }
  }

  render() {
    if (!this.state.prayerTimes)
      return (
        <>
          <h1>Loading</h1>
        </>
      );

    var asrRows = this.getAsrRows();

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
              <td>{this.state.prayerTimes['fajr_begins']}</td>
              <td>{this.state.prayerTimes['fajr_jamaah']}</td>
            </tr>
            <tr>
              <th>Zuhr</th>
              <td />
              <td>{this.state.prayerTimes['zuhr_begins']}</td>
              <td>{this.state.prayerTimes['zuhr_jamaah']}</td>
            </tr>
            {asrRows}
            <tr>
              <th>Maghrib</th>
              <td />
              <td>{this.state.prayerTimes['maghrib_begins']}</td>
              <td>{this.state.prayerTimes['maghrib_jamaah']}</td>
            </tr>
            <tr>
              <th>Isha</th>
              <td />
              <td>{this.state.prayerTimes['isha_begins']}</td>
              <td>{this.state.prayerTimes['isha_jamaah']}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default PrayerTimes;
