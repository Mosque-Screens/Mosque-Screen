import moment from 'moment';
import config from '../../config.json';
import csvtojson from 'csvtojson';
import request from 'request';

class HadithData {
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
    // If last change set, the use, else fallback to current time.
    let lastHadithChanged =
      window.localStorage.getItem('hadithData_lastChangedHadith') ||
      moment().unix();
    let oneDayHasPassed =
      (moment().unix() - lastHadithChanged) / 60 / 60 / 24 > 1 ? true : false;

    let currentHadithIndex =
      JSON.parse(window.localStorage.getItem('hadithData_currentIndex')) || 0;
    let hadith = JSON.parse(window.localStorage.getItem('hadithData'));
    let currentHadith = {};

    if (oneDayHasPassed) {
      currentHadithIndex + 1 >= Object.keys(hadith).length
        ? (currentHadithIndex = 0)
        : ++currentHadithIndex;

      window.localStorage.setItem(
        'hadithData_currentIndex',
        currentHadithIndex
      );
      window.localStorage.setItem(
        'hadithData_lastChangedHadith',
        moment().unix()
      );
    }

    if (currentHadithIndex === 0) {
      // We are still at the first index so must mean that we haven't accessed hadith before.
      // Therefore, we must log the first access time.
      window.localStorage.setItem(
        'hadithData_lastChangedHadith',
        moment().unix()
      );
      window.localStorage.setItem(
        'hadithData_currentIndex',
        currentHadithIndex
      );
    }

    currentHadith = hadith[currentHadithIndex];
    console.log(currentHadith);
    return currentHadith;
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

export default HadithData;
