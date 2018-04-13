import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LagerDetails from './components/Lager_Detail'
import LagerBearbeiten from './components/Lager_Bearbeiten'
import Home from './components/Home'
import KundenDetails from './components/Kunden_Detail'
import LieferantenDetails from './components/Lieferanten_Detail'
import PriceList from './components/Preisliste'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/lager/details' component={LagerDetails} />
            <Route exact path='/lager/edit' component={LagerBearbeiten} />
            <Route exact path='/kunde/details' component={KundenDetails} />
            <Route exact path='/lieferant/details' component={LieferantenDetails} />
            <Route exact path='/lieferant/priceList' component={PriceList} />
          </Switch>
        </div>

    </Router>
    );
  }
}

export default App;
