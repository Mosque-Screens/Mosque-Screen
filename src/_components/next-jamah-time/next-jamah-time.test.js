import React from 'react';
import ReactDOM from 'react-dom';
import NextJammahTime from './next-jamah-time';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NextJammahTime />, div);
  ReactDOM.unmountComponentAtNode(div);
});
