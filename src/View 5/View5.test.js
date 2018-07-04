import React from 'react';
import ReactDOM from 'react-dom';
import View5 from './View5';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<View5 />, div);
  ReactDOM.unmountComponentAtNode(div);
});
