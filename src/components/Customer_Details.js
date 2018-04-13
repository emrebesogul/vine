import React, { Component } from 'react';
import { Header, Icon, Button } from 'semantic-ui-react';
import '../App.css';
import { Link } from "react-router-dom"
import { getCustomerById } from '../API/POST/PostMethods';

class CustomerDetails extends Component {

  constructor(props) {
      super(props);
      this.state = {
          customerData: []
      }
      this.getCustomer();
  }

  async getCustomer() {
      const customerData = await getCustomerById(this.props.location.query._id);
      this.setState({customerData: customerData});
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
            <h2 className="head-label"> {this.state.customerData.firstName} {this.state.customerData.lastName} </h2>
            <div id="first-label-detail" className="label-inline">
              <span className="detail-label"> Name:</span>
              <span className="label-content"> {this.state.customerData.firstName} {this.state.customerData.lastName}</span>
            </div>
            <div>
              <span className="detail-label"> Straße:</span>
              <span className="label-content"> {this.state.customerData.street} </span>
            </div>
            <div>
              <span className="detail-label"> Ort: </span>
              <span className="label-content"> {this.state.customerData.postcode} {this.state.customerData.city} </span>
            </div>
            <div>
              <span className="detail-label"> Telefon:</span>
              <span className="label-content"> {this.state.customerData.phoneNumber}  </span>
            </div>
        </div>
      </div>
    </div>
    );
  }
}

export default CustomerDetails;
