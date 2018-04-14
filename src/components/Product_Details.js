import React, { Component } from 'react';
import { Header, Icon, Button, Image } from 'semantic-ui-react';
import '../App.css';
import { Link } from "react-router-dom"
import wineImage from '../assets/images/wein.png'
import { getProductById } from '../API/POST/PostMethods';

class ProductDetails extends Component {

  constructor(props) {
      super(props);
      this.state = {
          productData: []
      }
      this.getProduct();
  }

  async getProduct() {
      const productData = await getProductById(this.props.location.query.item._id);
      this.setState({productData: productData});
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
            <Image id="product-view" size="tiny" src={wineImage} />
            <h2 className="head-label"> {this.state.productData.title} </h2>
            <div id="first-label-detail" className="label-inline">
              <span className="detail-label"> Bezeichnung:</span>
              <span className="label-content"> {this.state.productData.title} </span>
            </div>
            <div>
              <span className="detail-label"> Anzahl:</span>
              <span className="label-content"> {this.state.productData.quantity} </span>
            </div>
            <div>
              <span className="detail-label"> Jahrgang: </span>
              <span className="label-content"> {this.state.productData.year} </span>
            </div>
            <div>
              <span className="detail-label"> Lage:</span>
              <span className="label-content"> {this.state.productData.location} </span>
            </div>
            <div>
             <span className="detail-label"> Region:</span>
             <span className="label-content"> {this.state.productData.region} </span>
            </div>
            <div>
              <span className="detail-label"> Land: </span>
              <span className="label-content"> {this.state.productData.country} </span>
            </div>
            <div>
              <span className="detail-label"> Verkaufspreis:</span>
              {this.state.productData.salePrice !== "" ? 
                <span className="label-content"> {this.state.productData.salePrice} € </span> : 
                null
              }
            </div>
            <div>
              <span className="detail-label"> Einkaufspreis:</span>
              {this.state.productData.buyingPrice !== "" ? 
                <span className="label-content"> {this.state.productData.buyingPrice} € </span> : 
                null
              }
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetails;
