import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.scss';
import { Main } from './containers';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path='/'>
          <Main />
        </Route>
      </Switch>
    </Router>
  );
}
