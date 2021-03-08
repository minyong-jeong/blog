import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Nav from './components/Nav/Nav';
import Post from './components/Post/Post';
import CardContainer from './components/Card/CardContainer';
import Error404 from './components/Error/Error404';

import './App.scss';

const App = () => {
  return (
    <div className="app">
      <Nav/>
      <Switch>
        <Route exact={true} path="/" component={CardContainer}/>
        <Route path="/post/:markdown" component={Post}/>
        <Route component={Error404}/>
      </Switch>
    </div>
  );
};

export default App;