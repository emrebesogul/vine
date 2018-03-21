import React, { Component } from 'react';
import Tab from './Tab.js'
import { Header, Icon } from 'semantic-ui-react';
import '../App.css';

class Home extends Component {
  render() {
    return (
        <div className="App">
          <div id="header">
            <Header as='h2' icon className="title-menu">
              <Icon name="home" />
              <span id="title">Weinhandlung Semsakrebsler</span>
                <Header.Subheader id="Subheader">
                  Verwalten Sie Lagerbestände, Kunden- und Lieferantendaten, sowie die Verkäufe.
                </Header.Subheader>
            </Header>
          </div>
          <div id="content">
            <Tab />
          </div>
        </div>

    );
  }
}

export default Home;
