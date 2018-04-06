import React from 'react';
import ReactDOM from 'react-dom';
import View4 from './View4';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<View4 />, div);
  ReactDOM.unmountComponentAtNode(div);
});
