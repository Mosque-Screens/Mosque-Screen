import React, { Component } from 'react';
import moment from 'moment';
import './prayer-times-week-ahead.css';
import PrayerData from '../prayer-data/prayer-data';

class PrayerTimesWeekAhead extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prayerTimes: this.getPrayerTimes()
    };
  }

  getPrayerTimes(additional_days = 0) {
    var date = moment()
      .add(additional_days, 'days')
      .format('DD/MM/YYYY');
    var _data = new PrayerData();
    return _data.getPrayerTimes(date);
  }

  getNext7daysTableRows() {
    var rows = [];
    var numrows = 7;

    for (var i = 1; i <= numrows; i++) {
      // note: we add a key prop here to allow react to uniquely identify each
      // element in this array. see: https://reactjs.org/docs/lists-and-keys.html

      var times = this.getPrayerTimes(i);
      var date = moment(times['Date'], 'DD/MM/YYYY').format('ddd D MMM');
      rows.push(
        <tr key={i} className="PrayerTimesWeekAhead-row">
          <td>{date}</td>
          {/* FAJR */}
          <td>{times['Fajr Begins']}</td>
          <td>{times['Fajr Jama‘ah']}</td>
          <td>{times['Sunrise']}</td>

          {/* ZUHR */}
          <td>{times['Zuhr Begins']}</td>
          <td>{times['Zuhr Jama‘ah']}</td>

          {/* ASR */}
          <td>{times['Asr Mithl 1']}</td>
          <td>{times['Asr Mithl 2']}</td>
          <td>{times['Asr Jama‘ah']}</td>

          {/* MAGHRIB */}
          <td>{times['Maghrib Begins']}</td>
          <td>{times['Maghrib Jama‘ah']}</td>

          {/* ISHA */}
          <td>{times['Isha Begins']}</td>
          <td>{times['Isha Jama‘ah']}</td>
        </tr>
      );
    }

    return rows;
  }

  render() {
    var rows = this.getNext7daysTableRows();
    return (
      <div className="PrayerTimesWeekAheadWrapper">
        <table className="PrayerTimesWeekAhead">
          <thead>
            <tr>
              <th>Week ahead</th>
              <th colSpan="3">Fajr</th>
              <th colSpan="2">Zuhr</th>
              <th colSpan="3">Asr</th>
              <th colSpan="2">Maghrib</th>
              <th colSpan="2">Isha</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td />
              {/* FAJR */}
              <td>Begins</td>
              <td>Jama'ah</td>
              <td>Sunrise</td>

              {/* ZUHR */}
              <td>Begins</td>
              <td>Jama'ah</td>

              {/* ASR */}
              <td>Mithl 1</td>
              <td>Mithl 2</td>
              <td>Jama'ah</td>

              {/* MAGHRIB */}
              <td>Begins</td>
              <td>Jama'ah</td>

              {/* ISHA */}
              <td>Begins</td>
              <td>Jama'ah</td>
            </tr>
            {rows}
          </tbody>
        </table>
      </div>
    );
  }
}

export default PrayerTimesWeekAhead;
