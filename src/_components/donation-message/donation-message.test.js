import React from 'react';
import ReactDOM from 'react-dom';
import DonationMessage from './donation-message';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DonationMessage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
