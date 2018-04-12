import React, { Component } from 'react';
import { Header, Icon, Button } from 'semantic-ui-react';
import '../App.css';
import { Link } from "react-router-dom"

class KundenDetail extends Component {
  render() {
    return (
      <div className="">
        <div id="header">
          <Header as='h2' icon className="title-menu">
            <Icon name="home" />
            <span id="title">Weinhandlung Semsakrebsler</span>
              <Header.Subheader id="Subheader">
                Verwalten Sie Lagerbestände, Kunden- und Lieferantendaten, sowie die Verkäufe.
              </Header.Subheader>
          </Header>
        </div>
        <div id="detail-content">
          <Link to="/">
            <Button id="button-back">Zurück</Button>
            </Link>
          <div class="ui segment">
            <h2 className="head-label"> Bill Gates </h2>
            <div id="first-label-detail" className="label-inline">
              <span className="detail-label"> Name:</span>
              <span className="label-content"> Bill Gates </span>
            </div>
            <div>
              <span className="detail-label"> Straße:</span>
              <span className="label-content"> Lilienweg 5 </span>
            </div>
            <div>
              <span className="detail-label"> Ort: </span>
              <span className="label-content"> 72555 Reutlingen </span>
            </div>
            <div>
              <span className="detail-label"> Telefon:</span>
              <span className="label-content"> 110  </span>
            </div>
        </div>
      </div>
    </div>
    );
  }
}

export default KundenDetail;
