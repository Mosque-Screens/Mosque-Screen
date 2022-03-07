import moment from 'moment';
import config from '../../config.json';
import axios from 'axios';
import { find } from 'lodash';

class PrayerData {
  constructor() {
    this.updateData();
  }

  getPrayerTimes(date = null) {
    date = date === null ? moment().format('DD/MM/YYYY') : date;
    var data = this.getPrayerData();
    return find(data, {
      day: moment(date, 'DD/MM/YYYY').format('DD'),
      month: moment(date, 'DD/MM/YYYY').format('MM')
    });
  }

  getSpeadsheetUrl() {
    return process.env.REACT_APP_PRAYER_DATA_SPREADSHEET_URL
      ? process.env.REACT_APP_PRAYER_DATA_SPREADSHEET_URL
      : config.googleSheets.prayerData;
  }

  getPrayerTimesFromGoogleSheets() {
    var spreadsheetUrl = this.getSpeadsheetUrl();

    if (!spreadsheetUrl) {
      alert('REACT_APP_PRAYER_DATA_SPREADSHEET_URL env not set');
    }

    return axios
      .get(`${spreadsheetUrl}&_cacheBust=${Math.random()}`)
      .then(json => {
        this.storePrayerData(json.data);
      });
  }

  storePrayerData(prayerData = []) {
    window.localStorage.setItem('prayerData', JSON.stringify(prayerData));
    window.localStorage.setItem('prayerData_lastUpdated', moment().unix());
  }

  getPrayerData() {
    var _prayerData = window.localStorage.getItem('prayerData');
    return _prayerData ? JSON.parse(_prayerData) : null;
  }

  getLastUpdatedTime() {
    return window.localStorage.getItem('prayerData_lastUpdated');
  }

  updateData() {
    var lastUpdatedDiff = moment().unix() - parseInt(this.getLastUpdatedTime());
    var alreadyHasPrayerData = this.getPrayerData() ? true : false;
    if (
      lastUpdatedDiff > config.googleSheets.refreshRate * 60 ||
      !alreadyHasPrayerData
    ) {
      this.getPrayerTimesFromGoogleSheets().then(() => {
        if (!alreadyHasPrayerData) {
          setTimeout(function() {
            window.location.reload();
          }, 2000);
        }
      });
      console.info('Updating Prayer Data....');
    }
  }
}

export default PrayerData;
