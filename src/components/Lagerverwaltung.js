import React, { Component } from 'react';
import TabLager from './Tab_Lager.js';
import './components.css';

class Lagerverwaltung extends Component {
  render() {
    return (
      <div id="management-container">
        <TabLager />
      </div>
    );
  }
}

export default Lagerverwaltung;
