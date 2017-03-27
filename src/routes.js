import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import App from './components/App';
import NotFound from './components/NotFound';

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={App}/>
      <Route path="/404" component={NotFound}/>
    </div>
  </Router>
);

export default Routes;
