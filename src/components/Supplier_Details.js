import React, { Component } from 'react';
import { Header, Icon, Button } from 'semantic-ui-react';
import '../App.css';
import { Link } from "react-router-dom"
import { getSupplierById } from '../API/POST/PostMethods';

class SupplierDetails extends Component {

  constructor(props) {
      super(props);

      this.state = {
          supplierData: []
      }
      this.getSupplier();
  }

  async getSupplier() {
      const supplierData = await getSupplierById(this.props.location.query._id);
      this.setState({supplierData: supplierData});
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
          <Link to="/">
            <Button id="button-back">Zurück</Button>
            </Link>
          <div className="ui segment">
            <h2 className="head-label"> {this.state.supplierData.firstName} {this.state.supplierData.lastName} </h2>
            <div id="first-label-detail" className="label-inline">
              <span className="detail-label"> Firma:</span>
              <span className="label-content"> {this.state.supplierData.company}</span>
            </div>
            <div id="first-label-detail" className="label-inline">
              <span className="detail-label"> Name:</span>
              <span className="label-content"> {this.state.supplierData.firstName} {this.state.supplierData.lastName}</span>
            </div>
            <div>
              <span className="detail-label"> Straße:</span>
              <span className="label-content"> {this.state.supplierData.street} </span>
            </div>
            <div>
              <span className="detail-label"> Ort: </span>
              <span className="label-content"> {this.state.supplierData.postcode} {this.state.supplierData.city} </span>
            </div>
            <div>
              <span className="detail-label"> Telefon:</span>
              <span className="label-content"> {this.state.supplierData.phoneNumber}  </span>
            </div>
        </div>
      </div>
    </div>
    );
  }
}

export default SupplierDetails;
