import React from 'react';
import ReactDOM from 'react-dom';
import PrayerTimes from './PrayerTimesWeekAhead';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PrayerTimesWeekAhead />, div);
  ReactDOM.unmountComponentAtNode(div);
});
