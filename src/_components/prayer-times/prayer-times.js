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
              <th>Fajr فجر</th>
              <td />
              <td>{this.state.prayerTimes['Fajr Begins']}</td>
              <td>{this.state.prayerTimes['Fajr Jama‘ah']}</td>
            </tr>
            <tr>
              <th>Duhr ظهر</th>
              <td />
              <td>{this.state.prayerTimes['Duhr Begins']}</td>
              <td>{this.state.prayerTimes['Duhr Jama‘ah']}</td>
            </tr>
            <tr>
              <th>Asr عصر</th>
              <td />
              <td>{this.state.prayerTimes['Asr Begins']}</td>
              <td>{this.state.prayerTimes['Asr Jama‘ah']}</td>
            </tr>
            <tr>
              <th>Maghribمغرب</th>
              <td />
              <td>{this.state.prayerTimes['Maghrib Begins']}</td>
              <td>{this.state.prayerTimes['Maghrib Jama‘ah']}</td>
            </tr>
            <tr>
              <th>Isha عشاء</th>
              <td />
              <td>{this.state.prayerTimes['Isha Begins']}</td>
              <td>{this.state.prayerTimes['Isha Jama‘ah']}</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <th>Jumu'ah</th>
              <td />
              getJummahTimes() {
    var summerTimes = {
      slot_1: this.state._appConfig.get('Jummah_slot_1_summer'),
      slot_2: this.state._appConfig.get('Jummah_slot_2_summer')
    };

    var winterTimes = {
      slot_1: this.state._appConfig.get('Jummah_slot_1_winter'),
      slot_2: this.state._appConfig.get('Jummah_slot_2_winter')
    };
    return this.getDST() ? summerTimes : winterTimes;
  }
            </tr>
          </tbody>          
        </table>
      </div>
    );
  }
}

export default PrayerTimes;
