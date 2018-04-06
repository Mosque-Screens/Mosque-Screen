import React from 'react';
import ReactDOM from 'react-dom';
import NextJamahTime from './next-jamah-time';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NextJamahTime />, div);
  ReactDOM.unmountComponentAtNode(div);
});
