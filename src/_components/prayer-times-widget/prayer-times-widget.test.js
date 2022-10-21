import React from 'react';
import ReactDOM from 'react-dom';
import PrayerTimesWidget from './prayer-times-widget';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PrayerTimesWidget />, div);
  ReactDOM.unmountComponentAtNode(div);
});
