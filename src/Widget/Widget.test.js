import React from 'react';
import ReactDOM from 'react-dom';
import Widget from './Widget';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Widget />, div);
  ReactDOM.unmountComponentAtNode(div);
});
