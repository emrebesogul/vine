import React, { Component } from 'react';
import { Header, Icon, Button, Image, Form, Input, Message } from 'semantic-ui-react';
import '../App.css';
import { Link } from "react-router-dom"
import wineImage from '../assets/images/wein.png'
import { getProductById } from '../API/POST/PostMethods';
import { updateProduct } from '../API/PUT/PutMethods';

class EditProduct extends Component {

  constructor(props) {
      super(props);

      this.state = {
          productId: this.props.location.query.item._id,
          productData: [],
          showErrorMessage: false
      }
      this.getProduct();
  }

  async getProduct() {
      const productData = await getProductById(this.state.productId);
      this.setState({"productData": productData});
      this.setState({"title": productData.title});
      this.setState({"year": productData.year});
      this.setState({"location": productData.location});
      this.setState({"region": productData.region});
      this.setState({"country": productData.country});
      this.setState({"quantity": productData.quantity});
      this.setState({"buyingPrice": productData.buyingPrice});
      this.setState({"salePrice": productData.salePrice});
  }

  handleChange(event, data) {
      switch (data) {
          case "title": this.setState({"title": event.target.value}); break;
          case "year": this.setState({"year": event.target.value}); break;
          case "location": this.setState({"location": event.target.value}); break;
          case "region": this.setState({"region": event.target.value}); break;
          case "country": this.setState({"country": event.target.value}); break;
          case "quantity": this.setState({"quantity": event.target.value}); break;
          case "buyingPrice": this.setState({"buyingPrice": event.target.value}); break;
          case "salePrice": this.setState({"salePrice": event.target.value}); break;
          default: /* Do nothing */;
      }
  }

  async handleUpdate(event) {
      event.preventDefault();
      const productData = {
          "productId": this.state.productId,
          "title" : event.target[0].value,
          "year" : event.target[1].value,
          "location" : event.target[2].value,
          "region" : event.target[3].value,
          "country" : event.target[4].value,
          "quantity" : event.target[5].value,
          "buyingPrice" : event.target[6].value,
          "salePrice" : event.target[7].value,
      }

      const response = await updateProduct(productData);
      this.setState({statusUpdateProduct: response});

      if (response) {
          window.location.href = '/';
      } else {
          this.setState({ showErrorMessage: true });
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
            <Image id="product-view" size="tiny" src={wineImage} />
              <Form onSubmit={((e) => this.handleUpdate(e))}>
                <h2 className="head-label">Bestehendes Produkt bearbeiten</h2>
                {this.state.showErrorMessage ? <Message negative><p>Daten fehlerhaft!</p></Message> : null}
                <div className="">
                  <span className="input-label">Bezeichnung</span>
                  <Input required className="input-text"  placeholder={this.state.title} value={this.state.title} 
                      onChange={(e) => this.handleChange(e,"title")}/>
                </div>
                <div className="input-fields">
                  <span className="input-label">Jahrgang</span>
                  <Input className="input-text" placeholder={this.state.year} value={this.state.year} 
                      onChange={(e) => this.handleChange(e,"year")}/>
                </div>
                <div className="input-fields">
                  <span className="input-label">Lage</span>
                  <Input className="input-text" placeholder={this.state.location} value={this.state.location} 
                      onChange={(e) => this.handleChange(e,"location")}/>
                </div>
                <div className="input-fields">
                  <span className="input-label">Region</span>
                  <Input className="input-text" placeholder={this.state.region} value={this.state.region}
                      onChange={(e) => this.handleChange(e,"region")}/>
                </div>
                <div className="input-fields">
                  <span className="input-label">Land</span>
                  <Input className="input-text" placeholder={this.state.country} value={this.state.country} 
                      onChange={(e) => this.handleChange(e,"country")}/>
                </div>
                <div className="input-fields">
                  <span className="input-label">Anzahl</span>
                  <Input className="input-text" placeholder={this.state.quantity} value={this.state.quantity} 
                      onChange={(e) => this.handleChange(e,"quantity")}/>
                </div>
                <div className="input-fields">
                  <span className="input-label">Einkaufspreis</span>
                  <Input className="input-text" placeholder={this.state.buyingPrice} value={this.state.buyingPrice} 
                      onChange={(e) => this.handleChange(e,"buyingPrice")}/>
                </div>
                <div className="input-fields">
                  <span className="input-label">Verkaufspreis</span>
                  <Input className="input-text" placeholder={this.state.salePrice} value={this.state.salePrice} 
                      onChange={(e) => this.handleChange(e,"salePrice")}/>
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

export default EditProduct;
