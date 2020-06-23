import React, { Component } from 'react';
import moment from 'moment';
import './prayer-times-single-view.css';
import PrayerData from '../prayer-data/prayer-data';
import nextJammahTime from '../next-jamah-time/next-jamah-time';

class PrayerTimesSingleView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prayerTimes: this.getPrayerTimes(),
      tomorrowsPrayerTimes: this.getTomorrowsPrayerTimes(),
      nextJammah: this.getNextJammah(),
      jammahCheckingInterval: 60000
    };
  }

  getPrayerTimes() {
    var _data = new PrayerData();
    return _data.getPrayerTimes();
  }

  getTomorrowsPrayerTimes() {
    var date = moment()
      .add(1, 'days')
      .format('DD/MM/YYYY');
    var _data = new PrayerData();
    return _data.getPrayerTimes(date);
  }

  getNextJammah() {
    var nextJammah = new nextJammahTime();
    return nextJammah.getNextJammahTime();
  }

  startInterval() {
    this.interval = setInterval(() => {
      this.setState(() => ({
        nextJammah: this.getNextJammah()
      }));
    }, this.state.jammahCheckingInterval);
  }

  stopInterval() {
    clearInterval(this.interval);
  }

  componentDidMount() {
    this.startInterval();
  }

  componentWillUnmount() {
    this.stopInterval();
  }

  getAsrTime() {
    if (
      this.state.prayerTimes['asr_1_begins'] &&
      !this.state.prayerTimes['asr_2_begins']
    ) {
      return this.state.prayerTimes['asr_1_begins'];
    } else if (
      this.state.prayerTimes['asr_2_begins'] &&
      !this.state.prayerTimes['asr_1_begins']
    ) {
      return this.state.prayerTimes['asr_2_begins'];
    } else {
      return (
        <ul className="bullet-list--no-decorations">
          <li>{this.state.prayerTimes['asr_1_begins']}</li>
          <li>{this.state.prayerTimes['asr_2_begins']}</li>
        </ul>
      );
    }
  }

  render() {
    return (
      <div className="PrayerTimeSingleViewWrapper">
        <table className="PrayerTimesSingleView">
          <thead>
            <tr>
              <th />
              <th>Begins</th>
              <th>Jama'ah</th>
              <th>Tomorrow</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Fajr</th>
              <td>{this.state.prayerTimes['fajr_begins']}</td>
              <td
                className={
                  this.state.nextJammah.name === 'Fajr'
                    ? 'nextJammahHighlight'
                    : null
                }
              >
                {this.state.prayerTimes['fajr_jamaah']}
              </td>
              <td>{this.state.tomorrowsPrayerTimes['fajr_jamaah']}</td>
            </tr>
            <tr>
              <th>Zuhr</th>
              <td>{this.state.prayerTimes['zuhr_begins']}</td>
              <td
                className={
                  this.state.nextJammah.name === 'Zuhr'
                    ? 'nextJammahHighlight'
                    : null
                }
              >
                {this.state.prayerTimes['zuhr_jamaah']}
              </td>
              <td>{this.state.tomorrowsPrayerTimes['zuhr_jamaah']}</td>
            </tr>
            <tr>
              <th>'Asr</th>
              <td>{this.getAsrTime()}</td>
              <td
                className={
                  this.state.nextJammah.name === 'Asr'
                    ? 'nextJammahHighlight'
                    : null
                }
              >
                {this.state.prayerTimes['asr_jamaah']}
              </td>
              <td>{this.state.tomorrowsPrayerTimes['asr_jamaah']}</td>
            </tr>
            <tr>
              <th>Maghrib</th>
              <td>{this.state.prayerTimes['maghrib_begins']}</td>
              <td
                className={
                  this.state.nextJammah.name === 'Maghrib'
                    ? 'nextJammahHighlight'
                    : null
                }
              >
                {this.state.prayerTimes['maghrib_jamaah']}
              </td>
              <td>{this.state.tomorrowsPrayerTimes['maghrib_jamaah']}</td>
            </tr>
            <tr>
              <th>Isha</th>
              <td>{this.state.prayerTimes['isha_begins']}</td>
              <td
                className={
                  this.state.nextJammah.name === 'Isha'
                    ? 'nextJammahHighlight'
                    : null
                }
              >
                {this.state.prayerTimes['isha_jamaah']}
              </td>
              <td>{this.state.tomorrowsPrayerTimes['isha_jamaah']}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default PrayerTimesSingleView;
