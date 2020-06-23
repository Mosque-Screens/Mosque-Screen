import React, { Component } from 'react';
import PrayerData from '../prayer-data/prayer-data';
import moment from 'moment/moment';
import View5 from '../../Views/View 5/View5';
import AppConfig from '../app-config/app-config';

class BlackoutPeriods extends Component {
  constructor(props) {
    super(props);
    var _appConfig = new AppConfig();
    this.state = {
      blackOutSlide: <View5 />,
      blackOutPeriods: {
        fajr: _appConfig.get('blackOutPeriod_fajr'),
        zuhr: _appConfig.get('blackOutPeriod_zuhr'),
        asr: _appConfig.get('blackOutPeriod_asr'),
        maghrib: _appConfig.get('blackOutPeriod_maghrib'),
        isha: _appConfig.get('blackOutPeriod_isha'),
        jummah: _appConfig.get('blackOutPeriod_jummah')
      }
    };
  }

  getPrayerTimes() {
    var date = moment().format('DD/MM/YYYY');
    var _data = new PrayerData();
    var currentDay = _data.getPrayerTimes(date);
    var prayerTimes = {
      fajr: `${currentDay['fajr_jamaah']} AM`,
      zuhr: `${currentDay['zuhr_jamaah']} PM`,
      asr: `${currentDay['asr_jamaah']} PM`,
      maghrib: `${currentDay['maghrib_jamaah']} PM`,
      isha: `${currentDay['isha_jamaah']} PM`
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

  isJummahPeriod(prayerName) {
    return moment().day() === 5 && prayerName === 'zuhr';
  }

  isBlackout(prayerName) {
    // return true; // for testing
    var todaysPrayerTime = this.getPrayerTimes();
    var durations = this.state.blackOutPeriods;
    var currentTime = this.getCurrentTime();
    var isJummahPeriod = this.isJummahPeriod(prayerName);

    if (
      currentTime >= this.stringToTime(todaysPrayerTime[prayerName]) &&
      currentTime <=
        this.getBlackoutEndTime(
          this.stringToTime(todaysPrayerTime[prayerName]),
          isJummahPeriod ? durations['jummah'] : durations[prayerName]
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
