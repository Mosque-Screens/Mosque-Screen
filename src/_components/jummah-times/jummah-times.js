import React, { Component } from 'react';
import './jummah-times.css';
import data from '../../_assets/data/elm-jummah-times-2018';
import moment from 'moment/moment';

class SunriseAndZawwal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jummahTimes: this.getJummahTimes()
    };
  }

  getDST() {
    return moment().isDST();
  }

  getJummahTimes() {
    if (this.getDST()) {
      return data['summer'];
    } else {
      return data['winter'];
    }
  }

  render() {
    return (
      <div className="JummahTimesWrapper">
        <table className="JummahTimesTable">
          <thead>
            <tr>
              <th />
              <th>Khutbah</th>
              <th>Jama'ah</th>
            </tr>
          </thead>
          <tr>
            <td>Jumu‘ah</td>
            <td>{this.state.jummahTimes['khutbah']}</td>
            <td>{this.state.jummahTimes["jama'ah"]}</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default SunriseAndZawwal;
