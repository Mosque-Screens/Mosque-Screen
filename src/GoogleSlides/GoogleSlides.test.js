import React from 'react';
import ReactDOM from 'react-dom';
import GoogleSlides from './GoogleSlides';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GoogleSlides />, div);
  ReactDOM.unmountComponentAtNode(div);
});
