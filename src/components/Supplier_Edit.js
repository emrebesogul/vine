import React, { Component } from 'react';
import { Header, Icon, Button, Form, Input } from 'semantic-ui-react';
import '../App.css';
import { Link } from "react-router-dom"
import { getSupplierById } from '../API/POST/PostMethods';
import { updateSupplier } from '../API/PUT/PutMethods';

class EditSupplier extends Component {

  constructor(props) {
      super(props);

      this.state = {
          supplierId: this.props.location.query.item._id,
          supplierData: []
      }
      this.getSupplier();
  }

  async getSupplier() {
      const supplierData = await getSupplierById(this.state.supplierId);
      this.setState({"supplierData": supplierData});
      this.setState({"company": supplierData.company});
      this.setState({"firstName": supplierData.firstName});
      this.setState({"lastName": supplierData.lastName});
      this.setState({"street": supplierData.street});
      this.setState({"postcode": supplierData.postcode});
      this.setState({"city": supplierData.city});
      this.setState({"country": supplierData.country});
      this.setState({"phoneNumber": supplierData.phoneNumber});
  }

  handleChange(event, data) {
      switch (data) {
          case "company": this.setState({"company": event.target.value}); break;
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
      const supplierData = {
          "supplierId": this.state.supplierId,
          "company" : event.target[0].value,
          "firstName" : event.target[1].value,
          "lastName" : event.target[2].value,
          "street" : event.target[3].value,
          "postcode" : event.target[4].value,
          "city" : event.target[5].value,
          "country" : event.target[6].value,
          "phoneNumber" : event.target[7].value,
      }
      const response = await updateSupplier(supplierData);

      if (response) {
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
              <h2 className="head-label">Einen bestehenden Lieferanten bearbeiten</h2>
              <div>
                <span className="input-label">Firma</span>
                <Input  placeholder={this.state.company} value={this.state.company}
                    onChange={(e) => this.handleChange(e,"company")}/>
              </div>
              <div className="input-fields">
                <span className="input-label">Vorname</span>
                <Input required className="input-text" placeholder={this.state.firstName} value={this.state.firstName}
                    onChange={(e) => this.handleChange(e,"firstName")}/>
              </div>
              <div className="input-fields">
                <span className="input-label" >Nachname</span>
                <Input required className="input-text" placeholder={this.state.lastName} value={this.state.lastName}
                    onChange={(e) => this.handleChange(e,"lastName")}/>
              </div>
              <div className="input-fields">
                <span className="input-label">Straße und Hausnr.</span>
                <Input className="input-text" placeholder={this.state.street} value={this.state.street}
                    onChange={(e) => this.handleChange(e,"street")}/>
              </div>
              <div className="input-fields">
                <span className="input-label">Postleitzahl</span>
                <Input placeholder={this.state.postcode} value={this.state.postcode}
                    onChange={(e) => this.handleChange(e,"postcode")}/>
                </div>
                <div className="input-fields">
                  <span className="input-label" >Ort</span>
                  <Input className="input-text" placeholder={this.state.city} value={this.state.city}
                      onChange={(e) => this.handleChange(e,"city")}/>
              </div>
              <div className="input-fields">
                <span className="input-label">Land</span>
                <Input className="input-text" placeholder={this.state.country} value={this.state.country}
                    onChange={(e) => this.handleChange(e,"country")}/>
              </div>
              <div className="input-fields">
                <span className="input-label">Telefonnummer</span>
                <Input className="input-text" placeholder={this.state.phoneNumber} value={this.state.phoneNumber}
                    onChange={(e) => this.handleChange(e,"phoneNumber")}/>
              </div>
              <div className="input-fields">
                <Link to={{ pathname: '/', query: {item: "item"} }}>
                  <Button type ="reset" id="button-cancel-lager" align="right" className="button-menu">Zurück</Button>
                </Link>
                <Button id="button-save-lager" className="button-menu">Speichern</Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default EditSupplier;
