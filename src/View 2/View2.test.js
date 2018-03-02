import React from 'react';
import ReactDOM from 'react-dom';
import View2 from './View2';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<View2 />, div);
  ReactDOM.unmountComponentAtNode(div);
});
