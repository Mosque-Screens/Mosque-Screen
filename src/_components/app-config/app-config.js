import moment from 'moment';
import config from '../../config.json';
import axios from 'axios';

class AppConfig {
  constructor() {
    this.updateData();
  }

  get(key = null) {
    if (!key) return null;
    var data = this.getAppConfig();
    return data ? data[key] : '';
  }

  getSpeadsheetUrl() {
    return process.env.REACT_APP_APP_CONFIG_SPREADSHEET_URL
      ? process.env.REACT_APP_APP_CONFIG_SPREADSHEET_URL
      : config.googleSheets.appConfig;
  }

  getAppConfigFromGoogleSheets() {
    var spreadsheetUrl = this.getSpeadsheetUrl();

    if (!spreadsheetUrl) {
      alert('REACT_APP_APP_CONFIG_SPREADSHEET_URL env not set');
    }

    return axios
      .get(`${spreadsheetUrl}&_cacheBust=${Math.random()}`)
      .then(json => {
        this.storeAppConfig(json.data);
      });
  }

  storeAppConfig(_appConfig = []) {
    window.localStorage.setItem('appConfig', JSON.stringify(_appConfig));
    window.localStorage.setItem('appConfig_lastUpdated', moment().unix());
  }

  getAppConfig() {
    var _appConfig = window.localStorage.getItem('appConfig');
    return _appConfig ? JSON.parse(_appConfig) : null;
  }

  getLastUpdatedTime() {
    return window.localStorage.getItem('appConfig_lastUpdated');
  }

  updateData() {
    var lastUpdatedDiff = moment().unix() - parseInt(this.getLastUpdatedTime());
    if (
      lastUpdatedDiff > config.googleSheets.refreshRate * 60 ||
      !this.getAppConfig()
    ) {
      this.getAppConfigFromGoogleSheets();
      console.info('Updating App Config....');
    }
  }
}

export default AppConfig;
