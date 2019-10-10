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
      this.state.prayerTimes['Asr Mithl 1'] &&
      !this.state.prayerTimes['Asr Mithl 2']
    ) {
      return this.state.prayerTimes['Asr Mithl 1'];
    } else if (
      this.state.prayerTimes['Asr Mithl 2'] &&
      !this.state.prayerTimes['Asr Mithl 1']
    ) {
      return this.state.prayerTimes['Asr Mithl 2'];
    } else {
      return (
        <ul className="bullet-list--no-decorations">
          <li>{this.state.prayerTimes['Asr Mithl 1']}</li>
          <li>{this.state.prayerTimes['Asr Mithl 2']}</li>
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
              <td>{this.state.prayerTimes['Fajr Begins']}</td>
              <td
                className={
                  this.state.nextJammah.name === 'Fajr'
                    ? 'nextJammahHighlight'
                    : null
                }
              >
                {this.state.prayerTimes['Fajr Jama‘ah']}
              </td>
              <td>{this.state.tomorrowsPrayerTimes['Fajr Jama‘ah']}</td>
            </tr>
            <tr>
              <th>Zuhr</th>
              <td>{this.state.prayerTimes['Zuhr Begins']}</td>
              <td
                className={
                  this.state.nextJammah.name === 'Zuhr'
                    ? 'nextJammahHighlight'
                    : null
                }
              >
                {this.state.prayerTimes['Zuhr Jama‘ah']}
              </td>
              <td>{this.state.tomorrowsPrayerTimes['Zuhr Jama‘ah']}</td>
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
                {this.state.prayerTimes['Asr Jama‘ah']}
              </td>
              <td>{this.state.tomorrowsPrayerTimes['Asr Jama‘ah']}</td>
            </tr>
            <tr>
              <th>Maghrib</th>
              <td>{this.state.prayerTimes['Maghrib Begins']}</td>
              <td
                className={
                  this.state.nextJammah.name === 'Maghrib'
                    ? 'nextJammahHighlight'
                    : null
                }
              >
                {this.state.prayerTimes['Maghrib Jama‘ah']}
              </td>
              <td>{this.state.tomorrowsPrayerTimes['Maghrib Jama‘ah']}</td>
            </tr>
            <tr>
              <th>Isha</th>
              <td>{this.state.prayerTimes['Isha Begins']}</td>
              <td
                className={
                  this.state.nextJammah.name === 'Isha'
                    ? 'nextJammahHighlight'
                    : null
                }
              >
                {this.state.prayerTimes['Isha Jama‘ah']}
              </td>
              <td>{this.state.tomorrowsPrayerTimes['Isha Jama‘ah']}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default PrayerTimesSingleView;
