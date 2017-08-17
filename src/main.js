import React, { Component } from 'react';
import { render } from 'react-dom';
import Header from './header';
import { Route, HashRouter, Switch } from 'react-router-dom';
require('./style/app.scss');

const Home = () => (
  <div>Home</div>
);

const Projects = () => (
  <div>Projects</div>
);

const About = () => (
  <div>About</div>
);

const App = () => (
  <HashRouter>        
    <div className="app-container">
      <Header />
      <Switch>        
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  </HashRouter>
);

render(<App />, document.getElementById('app'));