import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import View1 from './View 1/View1';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap-4-grid/css/grid.css';

ReactDOM.render(<View1 />, document.getElementById('root'));
registerServiceWorker();
