import moment from 'moment';
import config from '../../config.json';
import csvtojson from 'csvtojson';
import request from 'request';

export default class HadithData {
  constructor() {
    this.getHadithFromGoogleSheets().then(() => {
      this.getCurrentDayHadith();
    });
  }

  getHadithSpreadsheetUrl() {
    return (
      process.env.REACT_APP_HADITH_DATA_SPREADSHEET_URL ||
      config.googleSheets.hadithData
    );
  }

  getHadithFromGoogleSheets() {
    let hadithSpreadsheetUrl = this.getHadithSpreadsheetUrl();

    if (!hadithSpreadsheetUrl) {
      alert('Hadith CSV not set');
    }

    return csvtojson()
      .fromStream(
        request.get(`${hadithSpreadsheetUrl}&_cacheBust=${Math.random()}`)
      )
      .then(json => {
        this.storeHadithData(json);
      });
  }

  getAllHadithData() {
    let _hadithData = window.localStorage.getItem('hadithData');
    return _hadithData ? JSON.parse(_hadithData) : null;
  }

  getLastUpdatedTime() {
    return window.localStorage.getItem('hadithData_lastUpdated');
  }

  getLastChangedTime() {
    return window.localStorage.getItem('hadithData_lastChangedHadith');
  }

  getCurrentDayHadith() {
    let lastHadithChanged = window.localStorage.getItem(
      'hadithData_lastChangedHadith'
    );

    if (!lastHadithChanged) {
      // If last change wasn't set then set it and set current index to 0, as this is the first (re)run.
      lastHadithChanged = moment().unix();
      let currentHadithIndex = 0;
      this._updateHadithMetadata(lastHadithChanged, currentHadithIndex);
    }

    let daysPassed = (moment().unix() - lastHadithChanged) / 60 / 60 / 24;
    let oneDayHasPassed = daysPassed > 1 ? true : false;

    let currentHadithIndex = JSON.parse(
      window.localStorage.getItem('hadithData_currentIndex')
    );
    let hadith = JSON.parse(window.localStorage.getItem('hadithData'));
    let currentHadith = {};

    if (oneDayHasPassed) {
      currentHadithIndex + 1 >= Object.keys(hadith).length
        ? (currentHadithIndex = 0)
        : ++currentHadithIndex;

      this._updateHadithMetadata(moment().unix(), currentHadithIndex);
    }

    currentHadith = hadith[currentHadithIndex];
    return currentHadith;
  }

  _updateHadithMetadata(lastChanged, currentIndex) {
    if (lastChanged && currentIndex >= 0) {
      window.localStorage.setItem('hadithData_lastChangedHadith', lastChanged);
      window.localStorage.setItem('hadithData_currentIndex', currentIndex);
    }
  }

  storeHadithData(hadithData = []) {
    window.localStorage.setItem('hadithData', JSON.stringify(hadithData));
    window.localStorage.setItem('hadithData_lastUpdated', moment().unix());
  }

  updateData() {
    var lastHadithUpdate = window.localStorage.getItem(
      'hadithData_lastUpdated'
    );
    var alreadyHasHadithData = this.getAllHadithData() ? true : false;
    if (
      lastHadithUpdate > config.googleSheets.refreshRate * 60 ||
      !alreadyHasHadithData
    ) {
      this.getHadithFromGoogleSheets();
      console.info('Updating Hadith Data....');
    }
  }
}
