import React from 'react';
import ReactDOM from 'react-dom';
import './_assets/fonts/fonts.css';
import './index.css';
import Slider from './Slider/Slider';
import Admin from './Admin/Admin';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap-4-grid/css/grid.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const routing = (
  <Router>
    <Switch>
      <Route path="/admin" exact component={Admin} />
      <Route component={Slider} />
    </Switch>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));
registerServiceWorker();
