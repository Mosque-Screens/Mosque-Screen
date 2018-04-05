import React from 'react';
import ReactDOM from 'react-dom';
import PrayerTimes from './prayer-times';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PrayerTimes />, div);
  ReactDOM.unmountComponentAtNode(div);
});
