import React, { Component } from 'react';
import { Header, Icon, Button } from 'semantic-ui-react';
import '../App.css';
import { Link } from "react-router-dom"
import { getSupplierById } from '../API/POST/PostMethods';

class Pricelist extends Component {

  constructor(props) {
      super(props);
      this.state = {
          supplierData: [],
          priceList: [],
          showCompany: false
      }
      this.getSupplier();
  }

  async getSupplier() {
      const supplierData = await getSupplierById(this.props.location.query.item._id);
      this.setState({supplierData: supplierData});
      if (supplierData.company !== "") {
          this.setState({showCompany: true});
      }
      /* Not implemeted yet
      const priceList = await getPriceList(this.props.location.query.item._id);
      this.setState({priceList: priceList}); */
  }

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
        <Link to={{ pathname: '/', query: {item: "item"} }}>
            <Button id="button-back">Zurück</Button>
            </Link>
          <div className="ui segment">
            {this.state.showCompany ? 
              <h2 className="head-label"> Preisliste Firma {this.state.supplierData.company}</h2> : 
              <h2 className="head-label"> Preisliste {this.state.supplierData.firstName} {this.state.supplierData.lastName}</h2> 
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Pricelist;
