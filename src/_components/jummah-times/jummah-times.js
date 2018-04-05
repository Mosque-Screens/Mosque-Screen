import React, { Component } from 'react';
import './jummah-times.css';
import data from '../../_assets/data/elm-jummah-times-2018';
import moment from 'moment/moment';

class JummahTimes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jummahTimes: this.getJummahTimes()
    };
  }

  getDST() {
    return this.getNextFriday().isDST();
  }

  getNextFriday() {
    const dayINeed = 5;

    if (moment().isoWeekday() <= dayINeed) {
      return moment().isoWeekday(dayINeed);
    } else {
      return moment()
        .add(1, 'weeks')
        .isoWeekday(dayINeed);
    }
  }

  getJummahTimes() {
    return this.getDST() ? data['summer'] : data['winter'];
  }

  render() {
    return (
      <div className="JummahTimesWrapper">
        <table className="JummahTimesTable">
          <thead>
            <tr>
              <th />
              <th>Khutbah</th>
              <th>Jama‘ah</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Jumu‘ah</td>
              <td>{this.state.jummahTimes['khutbah']}</td>
              <td>{this.state.jummahTimes["jama'ah"]}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default JummahTimes;
