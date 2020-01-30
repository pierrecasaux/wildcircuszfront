import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Instructions from './components/Instructions';
import Game from './components/Game';
import Videos from './components/Videos';
import Classement from './components/Classement';
import Home from './components/Home';

import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Instructions" component={Instructions} />
        <Route path="/Game" component={Game} />
        <Route path="/Videos" component={Videos} />
        <Route path="/Classement" component={Classement} />
      </Switch>
    </div>
  );
}

export default App;
