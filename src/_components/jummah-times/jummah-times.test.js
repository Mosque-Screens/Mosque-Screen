import React from 'react';
import ReactDOM from 'react-dom';
import JummahTimes from './jummah-times';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<JummahTimes />, div);
  ReactDOM.unmountComponentAtNode(div);
});
