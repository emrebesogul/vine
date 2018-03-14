import React, { Component } from 'react';
import './components.css';
import TabLieferant from '../components/Tab_Lieferanten.js';

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
