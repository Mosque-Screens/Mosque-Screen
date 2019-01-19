import moment from 'moment';
import data from '../../_assets/data/elm-prayer-times-2019.json';

class PrayerData {
  getPrayerTimes(date = null) {
    date = date === null ? moment().format('DD/MM/YYYY') : date;
    return data[date];
  }
}

export default PrayerData;
