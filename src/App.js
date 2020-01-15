import React from 'react';

import {
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';

import './App.css';

import Task1 from './components/Task1';
import Task2 from './components/Task2';
import Task3 from './components/Task3';
import Task4 from './components/Task4';


const App = () => (
  <div className="App">
    <Route>
      <ul className="nav">
        <li className="nav__item">
          <NavLink
            to="/task1"
            className="nav__link"
            activeClassName="nav__link--active"
            exact
          >
            Task 1
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/task2"
            className="nav__link"
            activeClassName="nav__link--active"
          >
            Task 2
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/task3"
            className="nav__link"
            activeClassName="nav__link--active"
          >
            Task 3
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/task4"
            className="nav__link"
            activeClassName="nav__link--active"
          >
            Task 4
          </NavLink>
        </li>
      </ul>
    </Route>

    <Switch>
      <Route path="/task1" component={Task1} exact />
      <Route path="/task2" component={Task2} />
      <Route path="/task3" component={Task3} />
      <Route path="/task4" component={Task4} />
    </Switch>
  </div>
);

export default App;
