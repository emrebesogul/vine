import React, { Component } from 'react';
import { Header, Icon, Button, Image } from 'semantic-ui-react';
import '../App.css';
import { Link } from "react-router-dom"
import wineImage from '../assets/images/wein.png'

class LagerDetail extends Component {
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
            <Image id="product-view" size="tiny" src={wineImage} />
            <h2 className="head-label"> Metzinger Hofsteige </h2>
            <div id="first-label-detail" className="label-inline">
              <span className="detail-label"> Bezeichnung:</span>
              <span className="label-content"> Metzinger Weinsteige </span>
            </div>
            <div>
              <span className="detail-label"> Anzahl:</span>
              <span className="label-content"> 5 </span>
            </div>
            <div>
              <span className="detail-label"> Jahrgang: </span>
              <span className="label-content"> 1996 </span>
            </div>
            <div>
              <span className="detail-label"> Lage:</span>
              <span className="label-content"> Einzellage </span>
            </div>
            <div>
             <span className="detail-label"> Region:</span>
             <span className="label-content"> Rheinland-Pfalz</span>
            </div>
            <div>
              <span className="detail-label"> Land: </span>
              <span className="label-content"> Deutschland </span>
            </div>
            <div>
              <span className="detail-label"> Verkaufspreis:</span>
              <span className="label-content"> 20,99€ </span>
            </div>
            <div>
              <span className="detail-label"> Einkaufspreis:</span>
              <span className="label-content"> 14,56€</span>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default LagerDetail;
