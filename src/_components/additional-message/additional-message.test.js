import React from 'react';
import ReactDOM from 'react-dom';
import AdditionalMessage from './additional-message';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AdditionalMessage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
