import React from 'react';
import ReactDOM from 'react-dom';
import BuildNumber from './build-number';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BuildNumber />, div);
  ReactDOM.unmountComponentAtNode(div);
});
