import moment from 'moment';
import config from '../../config.json';
import csvtojson from 'csvtojson';
import request from 'request';

class PrayerData {
  constructor() {
    this.updateData();
  }

  getPrayerTimes(date = null) {
    date = date === null ? moment().format('DD/MM/YYYY') : date;
    var data = this.getPrayerData();
    return data ? data[date] : [];
  }

  getPrayerTimesFromGoogleSheets() {
    if (!config.googleSheets.prayerData) {
      alert('CSV not set');
    }

    return csvtojson()
      .fromStream(request.get(config.googleSheets.prayerData))
      .then(json => {
        this.storePrayerData(json);
      });
  }

  storePrayerData(prayerData = []) {
    var formatted_data = {};
    prayerData.forEach(day => {
      formatted_data[day.Date] = day;
    });
    window.localStorage.setItem('prayerData', JSON.stringify(formatted_data));
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
    if (
      lastUpdatedDiff > config.googleSheets.refreshRate * 60 ||
      !this.getPrayerData()
    ) {
      this.getPrayerTimesFromGoogleSheets();
      console.info('Updating Prayer Data....');
    }
  }
}

export default PrayerData;
