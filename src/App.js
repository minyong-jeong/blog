import React from 'react';
import Nav from './components/Nav/Nav';
import CardContainer from './components/Card/CardContainer';

import './App.scss';

const App = () => {
  return (
    <div className="app">
      {/* <Nav/> */}
      <CardContainer />
    </div>
  );
};

export default App;