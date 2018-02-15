import React, { Component } from 'react';
import './prayer-times.css';

class PrayerTimes extends Component {
  render() {
    return (
      <div className="PrayerTimesWrapper">
        <table class="PrayerTimes">
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th>Begins</th>
                        <th>Jama'ah</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Fajr</th>
                        <td></td>
                        <td id="fajr_begins">0:00</td>
                        <td id="fajr_jamaah">0:00</td>
                    </tr>
                    <tr>
                        <th>Zuhr</th>
                        <td></td>
                        <td id="zuhr_begins">0:00</td>
                        <td id="zuhr_jamaah">0:00</td>
                    </tr>
                    <tr>
                        <th rowspan="2">'Asr</th>
                        <td class="mithl-text">mithl 1</td>
                        <td id="asr1_begins">0:00</td>
                        <td id="asr_jamaah" rowspan="2">0:00</td>
                    </tr>
                    <tr>
                        <td class="mithl-text">mithl 2</td>
                        <td id="asr2_begins">0:00</td>
                    </tr>
                    <tr>
                        <th>Maghrib</th>
                        <td></td>
                        <td id="maghrib_begins">0:00</td>
                        <td id="maghrib_jamaah">0:00</td>
                    </tr>
                    <tr>
                        <th>Isha</th>
                        <td></td>
                        <td id="isha_begins">0:00</td>
                        <td id="isha_jamaah">0:00</td>
                    </tr>
                </tbody>
            </table>
      </div>
    );
  }
}

export default PrayerTimes;
