import React, { Component } from 'react';
import { Header, Icon, Button, Image, Form, Input, Message } from 'semantic-ui-react';
import '../App.css';
import { Link } from "react-router-dom"
import wineImage from '../assets/images/wein.png'
import { getCustomerById } from '../API/POST/PostMethods';
import { updateCustomer } from '../API/PUT/PutMethods';

class EditCustomer extends Component {

  constructor(props) {
      super(props);
      this.state = {
          customerId: this.props.location.query.item._id,
          customerData: []
      }
      this.getCustomer();
  }

  async getCustomer() {
      const customerData = await getCustomerById(this.state.customerId);
      this.setState({"customerData": customerData});
      this.setState({"firstName": customerData.firstName});
      this.setState({"lastName": customerData.lastName});
      this.setState({"street": customerData.street});
      this.setState({"postcode": customerData.postcode});
      this.setState({"city": customerData.city});
      this.setState({"country": customerData.country});
      this.setState({"phoneNumber": customerData.phoneNumber});
  }

  handleChange(event, data) {
      switch(data) {
          case "firstName": this.setState({"firstName": event.target.value}); break;
          case "lastName": this.setState({"lastName": event.target.value}); break;
          case "street": this.setState({"street": event.target.value}); break;
          case "postcode": this.setState({"postcode": event.target.value}); break;
          case "city": this.setState({"city": event.target.value}); break;
          case "country": this.setState({"country": event.target.value}); break;
          case "phoneNumber": this.setState({"phoneNumber": event.target.value}); break;
          default: /* Do nothing */;
      }
  }

  async handleUpdate(event) {
      event.preventDefault();
      const customerData = {
          "customerId": this.state.customerId,
          "firstName" : event.target[0].value,
          "lastName" : event.target[1].value,
          "street" : event.target[2].value,
          "postcode" : event.target[3].value,
          "city" : event.target[4].value,
          "country" : event.target[5].value,
          "phoneNumber" : event.target[6].value,
      }
      const response = await updateCustomer(customerData);

      if(response) {
          window.location.href = '/';
      } 
  }

  handleCancelUpdate(event) {
      window.location.href = '/';
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
          <div className="ui segment">
            <Form onSubmit={((e) => this.handleUpdate(e))}>
              <h2 className="head-label">Einen bestehenden Kunden bearbeiten</h2>
              <div className="input-fields">
                <span className="input-label">Vorname</span>
                <Input required placeholder={this.state.firstName} value={this.state.firstName} onChange={(e) => this.handleChange(e,"firstName")}/>
                <span className="input-label-inline" >Nachname</span>
                <Input required className="input-text" placeholder={this.state.lastName} value={this.state.lastName} onChange={(e) => this.handleChange(e,"lastName")}/>
              </div>
              <div className="input-fields">
                <span className="input-label">Straße und Hausnr.</span>
                <Input className="input-text" placeholder={this.state.street} value={this.state.street} onChange={(e) => this.handleChange(e,"street")}/>
              </div>
              <div className="input-fields">
                <span className="input-label">Postleitzahl</span>
                <Input placeholder={this.state.postcode} value={this.state.postcode} onChange={(e) => this.handleChange(e,"postcode")}/>
                  <span className="input-label-inline" >Ort</span>
                  <Input className="input-text" placeholder={this.state.city} value={this.state.city} onChange={(e) => this.handleChange(e,"city")}/>
              </div>
              <div className="input-fields">
                <span className="input-label">Land</span>
                <Input className="input-text" placeholder={this.state.country} value={this.state.country} onChange={(e) => this.handleChange(e,"country")}/>
              </div>
              <div className="input-fields">
                <span className="input-label">Telefonnummer</span>
                <Input className="input-text" placeholder={this.state.phoneNumber} value={this.state.phoneNumber} onChange={(e) => this.handleChange(e,"phoneNumber")}/>
              </div>
              <div className="input-fields">
                <Link to={{ pathname: '/', query: {item: "item"} }}><Button type ="reset" id="button-cancel-lager" align="right" className="button-menu">Zurück</Button></Link>
                <Button id="button-save-lager" className="button-menu">Speichern</Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default EditCustomer;
