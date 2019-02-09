import React from 'react';
import ReactDOM from 'react-dom';
import ResponsiveView1 from './ResponsiveView1';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ResponsiveView1 />, div);
  ReactDOM.unmountComponentAtNode(div);
});
