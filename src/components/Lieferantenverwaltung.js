import React, { Component } from 'react';
import { Button, Input } from 'semantic-ui-react';
import './components.css';
import TabLieferant from './Tab_Lieferanten.js';

class Lagerverwaltung extends Component {
  render() {
    return (
      <div id="management-container">
        <TabLieferant />
      </div>

    );
  }
}

export default Lagerverwaltung;
