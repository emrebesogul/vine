import React, { Component } from 'react';
import './components.css';
import TabVerkauf from './Tab_Verkauf.js';

class Lagerverwaltung extends Component {
  render() {
    return (
      <div id="management-container">
        <TabVerkauf />
      </div>

    );
  }
}

export default Lagerverwaltung;
