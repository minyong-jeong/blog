import React from 'react';
import { Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';

import './App.scss';

const Nav = loadable(() => import('./components/Nav/Nav'));
const CardContainer = loadable(() => import('./components/Card/CardContainer'));
const Post = loadable(() => import('./components/Post/Post'));
const Error404 = loadable(() => import('./components/Error/Error404'));

const App = () => {
  return (
    <div className="app">
      <Nav/>
      <Switch>
        <Route exact={true} path="/" component={CardContainer}/>
        <Route path="/:markdown" component={Post}/>
        <Route component={Error404}/>
      </Switch>
    </div>
  );
};

export default App;