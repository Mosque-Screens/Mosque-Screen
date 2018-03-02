import React from 'react';
import ReactDOM from 'react-dom';
import View1 from './Slider';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Slider />, div);
  ReactDOM.unmountComponentAtNode(div);
});
