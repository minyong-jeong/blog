import React from 'react';
import { Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';
import routes from './routes';

import './App.scss';

const Nav = loadable(() => import('./components/Nav/Nav'));
const Error404 = loadable(() => import('./components/Error/Error404'));

const App = () => {
  return (
    <div className="app">
      <Nav/>
      <Switch>
        {routes.map(route => (
        <Route
          exact
          key={route.path}
          path={route.path}
          component={route.component}
        />
        ))}
        <Route component={Error404}/>
      </Switch>
    </div>
  );
};

export default App;