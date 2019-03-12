import React from 'react';
import ReactDOM from 'react-dom';
import PrayerTimesSingleView from './prayer-times-single-view';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PrayerTimesSingleView />, div);
  ReactDOM.unmountComponentAtNode(div);
});
