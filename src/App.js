import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages';

import About from './pages/about';

import ping from './pages/ping';

import call from './pages/call';

import redirect from './pages/redirect'




function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} exact />
        <Route path="/ping" component={ping} exact />
        <Route path="/call" component={call} exact />
        <Route path="/redirect" component={redirect} exact />

      </Switch>
      
    </BrowserRouter>
  );
}

export default App;

