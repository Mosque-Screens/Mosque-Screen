import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './_template/App';
import View1 from './View 1/View1';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap-4-grid/css/grid.css';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<View1 />, document.getElementById('root'));
registerServiceWorker();
