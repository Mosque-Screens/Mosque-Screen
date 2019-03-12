import React from 'react';
import ReactDOM from 'react-dom';
import View1 from './View1';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<View1 />, div);
  ReactDOM.unmountComponentAtNode(div);
});
