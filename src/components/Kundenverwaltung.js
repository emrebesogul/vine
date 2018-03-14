import React, { Component } from 'react';
import './components.css';
import TabKunden from '../components/Tab_Kunden.js'

class Lagerverwaltung extends Component {
  render() {
    return (
      <div id="management-container">
        <TabKunden />

      </div>

    );
  }
}

export default Lagerverwaltung;
