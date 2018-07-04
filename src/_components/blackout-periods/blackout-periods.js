import React, { Component } from 'react';
import config from '../../config.json';
import data from '../../_assets/data/elm-prayer-times-2018.json';
import moment from 'moment/moment';
import View5 from '../../View 5/View5';

class BlackoutPeriods extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blackOutSlide: <View5 />,
      blackOutPeriods: config.blackOutPeriods
    };
  }

  getPrayerTimes() {
    var date = moment().format('DD/MM/YYYY');
    var currentDay = data[date];
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

  checkIfBlackoutPeriod() {
    var durations = this.state.blackOutPeriods;
    var todaysPrayerTime = this.getPrayerTimes();
    var currentTime = this.getCurrentTime();

    // TESTING
    /* var ___time = '15:27';
    if (
      currentTime >= this.stringToTime(___time) &&
      currentTime <=
        this.getBlackoutEndTime(
          this.stringToTime(___time),
          100
        )
    ) {
      return true; 
    } */

    if (
      currentTime >= this.stringToTime(todaysPrayerTime.fajr) &&
      currentTime <=
        this.getBlackoutEndTime(
          this.stringToTime(todaysPrayerTime.fajr),
          durations.fajr
        )
    ) {
      return true;
    } else if (
      currentTime >= this.stringToTime(todaysPrayerTime.zuhr) &&
      currentTime <=
        this.getBlackoutEndTime(
          this.stringToTime(todaysPrayerTime.zuhr),
          durations.zuhr
        )
    ) {
      return true;
    } else if (
      currentTime >= this.stringToTime(todaysPrayerTime.asr) &&
      currentTime <=
        this.getBlackoutEndTime(
          this.stringToTime(todaysPrayerTime.asr),
          durations.asr
        )
    ) {
      return true;
    } else if (
      currentTime >= this.stringToTime(todaysPrayerTime.maghrib) &&
      currentTime <=
        this.getBlackoutEndTime(
          this.stringToTime(todaysPrayerTime.maghrib),
          durations.maghrib
        )
    ) {
      return true;
    } else if (
      currentTime >= this.stringToTime(todaysPrayerTime.isha) &&
      currentTime <=
        this.getBlackoutEndTime(
          this.stringToTime(todaysPrayerTime.isha),
          durations.isha
        )
    ) {
      return true;
    } else {
      return false;
    }
  }
}

export default BlackoutPeriods;
