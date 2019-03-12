import React from 'react';
import ReactDOM from 'react-dom';
import SingleView from './SingleView';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SingleView />, div);
  ReactDOM.unmountComponentAtNode(div);
});
