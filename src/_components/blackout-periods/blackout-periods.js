import React, { Component } from 'react';
import PrayerData from '../prayer-data/prayer-data';
import moment from 'moment/moment';
import View5 from '../../View 5/View5';
import AppConfig from '../app-config/app-config';

class BlackoutPeriods extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blackOutSlide: <View5 />,
      _appConfig: new AppConfig()
    };
  }

  componentDidMount() {
    this.getBlackoutPeriods();
  }

  getBlackoutPeriods() {
    var periods = {
      fajr: this.state._appConfig.get('blackOutPeriod_fajr'),
      zuhr: this.state._appConfig.get('blackOutPeriod_zuhr'),
      asr: this.state._appConfig.get('blackOutPeriod_asr'),
      maghrib: this.state._appConfig.get('blackOutPeriod_maghrib'),
      isha: this.state._appConfig.get('blackOutPeriod_isha')
    };

    this.setState(() => ({
      blackOutPeriods: periods
    }));

    return periods;
  }

  getPrayerTimes() {
    var date = moment().format('DD/MM/YYYY');
    var _data = new PrayerData();
    var currentDay = _data.getPrayerTimes(date);
    var prayerTimes = {
      fajr: `${currentDay['Fajr Jama‘ah']} AM`,
      zuhr: `${currentDay['Zuhr Jama‘ah']} PM`,
      asr: `${currentDay['Asr Jama‘ah']} PM`,
      maghrib: `${currentDay['Maghrib Jama‘ah']} PM`,
      isha: `${currentDay['Isha Jama‘ah']} PM`
    };
    return prayerTimes;
  }

  getCurrentTime() {
    return moment().format('HH:mm');
  }

  stringToTime(stringTime) {
    return moment(stringTime, 'HH:mm a').format('HH:mm');
  }

  getBlackoutEndTime(time, duration = 10) {
    return moment(time, 'HH:mm a')
      .add(duration, 'minutes')
      .format('HH:mm');
  }

  isBlackout(prayerName) {
    // return true; // for testing
    var todaysPrayerTime = this.getPrayerTimes();
    var durations = this.state.blackOutPeriods;
    var currentTime = this.getCurrentTime();

    if (
      currentTime >= this.stringToTime(todaysPrayerTime[prayerName]) &&
      currentTime <=
        this.getBlackoutEndTime(
          this.stringToTime(todaysPrayerTime[prayerName]),
          durations[prayerName]
        )
    ) {
      return true;
    } else return false;
  }

  checkIfBlackoutPeriod() {
    if (this.isBlackout('fajr')) return true;
    else if (this.isBlackout('zuhr')) return true;
    else if (this.isBlackout('asr')) return true;
    else if (this.isBlackout('maghrib')) return true;
    else if (this.isBlackout('isha')) return true;
    else return false;
  }
}

export default BlackoutPeriods;
