import React, { Component } from 'react';
import moment from 'moment';
import './prayer-times-week-ahead.css';
import data from '../../_assets/data/elm-prayer-times-2018.json';

class PrayerTimesWeekAhead extends Component {
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
    var rows = [];
    var numrows = 7;
    for (var i = 0; i < numrows; i++) {
      // note: we add a key prop here to allow react to uniquely identify each
      // element in this array. see: https://reactjs.org/docs/lists-and-keys.html

      rows.push(
        <tr>
          <td>Date</td>
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
      );
    }
    return (
      <div className="PrayerTimesWeekAheadWrapper">
        <table className="PrayerTimesWeekAhead">
          <thead>
            <tr>
              <th>Week ahead</th>
              <th colspan="3">Fajr</th>
              <th colspan="2">Zuhr</th>
              <th colspan="3">Asr</th>
              <th colspan="2">Maghrib</th>
              <th colspan="2">Isha</th>
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
