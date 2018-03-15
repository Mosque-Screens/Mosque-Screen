import React from 'react';
import ReactDOM from 'react-dom';
import SunriseAndZawwal from './sunrise-and-zawwal';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SunriseAndZawwal />, div);
  ReactDOM.unmountComponentAtNode(div);
});
