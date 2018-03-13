import React, { Component } from 'react';
import { Button, Input } from 'semantic-ui-react';
import './components.css';

class Lagerverwaltung extends Component {
  render() {
    return (
      <div id="management-container">
        <Button className="button-menu">Letzte Verkäufe anzeigen</Button>
        <Button className="button-menu">Rechnung drucken</Button>
        Verkäufe anzeigen
      </div>

    );
  }
}

export default Lagerverwaltung;
