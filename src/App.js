import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LagerDetails from './components/Lager_Detail'
import Home from './components/Home'
import KundenDetails from './components/Kunden_Detail'
import LieferantenDetails from './components/Lieferanten_Detail'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/lager/details' component={LagerDetails} />
            <Route exact path='/kunde/details' component={KundenDetails} />
            <Route exact path='/lieferant/details' component={LieferantenDetails} />
          </Switch>
        </div>

    </Router>
    );
  }
}

export default App;
