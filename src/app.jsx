import React from 'react';
import Header from './header';
import { Route, HashRouter, Switch } from 'react-router-dom';

import Home from './home.page';
import Projects from './project.page';
import About from './about.page';

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

export default App;