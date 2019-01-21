import moment from 'moment';
import config from '../../config.json';
import csvtojson from 'csvtojson';
import request from 'request';

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
      alert('CSV not set');
    }

    return csvtojson()
      .fromStream(request.get(`${spreadsheetUrl}&_cacheBust=${Math.random()}`))
      .then(json => {
        this.storeAppConfig(json);
      });
  }

  storeAppConfig(_appConfig = []) {
    var formatted_data = {};
    _appConfig.forEach(conf => {
      formatted_data[conf.Key] = conf.Value;
    });
    window.localStorage.setItem('appConfig', JSON.stringify(formatted_data));
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
