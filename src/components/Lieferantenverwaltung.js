import React, { Component } from 'react';
import { Button, Input } from 'semantic-ui-react';
import './components.css';

class Lagerverwaltung extends Component {
  render() {
    return (
      <div id="management-container">
        <Button className="button-menu">Anlegen</Button>
        <Button className="button-menu">Liste anzeigen</Button>
        <Button className="button-menu">Drucken</Button>
        <div className="input-fields">
          <span className="input-label">Vorname</span>
          <Input className="input-text" focus placeholder="Vorname"/>
        </div>
        <div className="input-fields">
          <span className="input-label">Nachname</span>
          <Input className="input-text" focus placeholder="Nachname"/>
        </div>
        <div className="input-fields">
          <span className="input-label">Adresse</span>
          <Input className="input-text" focus placeholder="Adresse"/>
        </div>
        <div className="input-fields">
          <span className="input-label">Postleitzahl</span>
          <Input className="input-text" focus placeholder="Postleitzahl"/>
        </div>
        <div className="input-fields">
          <span className="input-label">Ort</span>
          <Input className="input-text" focus placeholder="Ort"/>
        </div>
        <div className="input-fields">
          <span className="input-label">Land</span>
          <Input className="input-text" focus placeholder="Land"/>
        </div>
        <div className="input-fields">
          <span className="input-label">Preisliste</span>
          <Input className="input-text" focus placeholder="Preisliste"/>
        </div>
      </div>

    );
  }
}

export default Lagerverwaltung;
