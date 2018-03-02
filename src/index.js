import React from 'react';
import ReactDOM from 'react-dom';
import './_assets/fonts/fonts.css';
import './index.css';
import Slider from './Slider/Slider';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap-4-grid/css/grid.css';

ReactDOM.render(<Slider />, document.getElementById('root'));
registerServiceWorker();
