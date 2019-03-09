import React from 'react';
import ReactDOM from 'react-dom';
import View6 from './View6';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<View6 />, div);
  ReactDOM.unmountComponentAtNode(div);
});
