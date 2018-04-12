import React from 'react'
import { Tab, Input, Button, List, Image, Form } from 'semantic-ui-react'
import avatar from "../assets/images/avatar.png"
import wineImage from '../assets/images/wine-bottle.png'
import {Link } from "react-router-dom";
import './components.css';
import { getProducts, getSuppliers } from '../API/GET/GetMethods';
import { createProduct, createSupplier, deleteProduct, deleteSupplier } from '../API/POST/PostMethods';

// var customers = [{name: "Steve Jobs", address: "Stuqqi"}, {name: "Jimmy Hendrix", address: "Bepflinga"}];
// var supplier = [{name: "Steve Jobs", address: "Stuqqi"}, {name: "Jimmy Hendrix", address: "Bepflinga"}];
// var products = [{name: "Steve Jobs", address: "Stuqqi"}, {name: "Jimmy Hendrix", address: "Bepflinga"}];

var products = [];
var supplier = [];
var customers = [{name: "Steve Jobs", address: "Stuqqi"}, {name: "Jimmy Hendrix", address: "Bepflinga"}];



class Home extends React.Component{

  constructor() {
      super();
      this.state = {
          productData: [],
          supplierData: [],
          activeIndexProducts: 1,
          activeIndexSuppliers: 1   
      }
      this.getSupplierData();
      this.getProductData();
  } 
  
  async getProductData() {
      const productData = await getProducts();
      this.setState({productData: productData});
  }

  async getSupplierData() {
      const supplierData = await getSuppliers();
      this.setState({supplierData: supplierData});
  }

  async handleDeleteProduct(event, data) {
      const response = await deleteProduct(data._id);
      if(response) {
          this.getProductData();
      }
  }

  async handleDeleteSupplier(event, data) {
      const response = await deleteSupplier(data._id);
      if(response) {
          this.getSupplierData();
      }
  }

  async handleCreateProduct(event) {
      event.preventDefault();

      const productData = {
          "title" : event.target[0].value,
          "year" : event.target[1].value,
          "origin" : event.target[2].value,
          "quantity" : event.target[3].value,
          "buyingPrice" : event.target[4].value,
          "salePrice" : event.target[5].value,
      }

      const response = await createProduct(productData);

      if(response) {
          this.getProductData();
          this.setState({activeIndexProducts: 1})
      }
  }

  async handleCreateSupplier(event) {
      event.preventDefault();

      const supplierData = {
          "company" : event.target[0].value,
          "firstName" : event.target[1].value,
          "lastName" : event.target[2].value,
          "street" : event.target[3].value,
          "postcode" : event.target[4].value,
          "city" : event.target[5].value,
          "country" : event.target[6].value,
          "phoneNumber" : event.target[7].value
      }

      const response = await createSupplier(supplierData);
      
      if(response) {
          this.getSupplierData();
          this.setState({activeIndexSuppliers: 1})
      } 
  }

  handleCancelCreateProduct(event) {
      this.setState({activeIndexProducts: 1})
  }

  handleCancelCreateSupplier(event) {
      this.setState({activeIndexSuppliers: 1})
  }

  handleTabChangeProducts(e, data) {
    this.setState({activeIndexProducts: data.activeIndex})
  }

  handleTabChangeSuppliers(e, data) {
      this.setState({activeIndexSuppliers: data.activeIndex})
  }

  render(){
    products = this.state.productData;
    supplier = this.state.supplierData;
    return(
        <Tab menu={{ secondary: true, pointing: true }} panes={
          [
           { menuItem: 'Kundenverwaltung', render: () => <Tab.Pane attached={false}>
           <Tab menu={{ fluid: true, vertical: true, tabular: 'right' }} panes={
               [
                 { menuItem: 'Kunde anlegen', render: () => <Tab.Pane>
                   <div>
                     <h2 className="head-label">Neuen Kunden anlegen</h2>
                     <span className="input-label">Vorname</span>
                     <Input  placeholder="Vorname"/>
                     <span className="input-label-inline" >Nachname</span>
                     <Input className="input-text"  placeholder="Nachname"/>
                   </div>
                   <div className="input-fields">
                     <span className="input-label">Straße und Hausnr.</span>
                     <Input className="input-text"  placeholder="Adresse"/>
                   </div>
                   <div className="input-fields">
                     <span className="input-label">Postleitzahl</span>
                     <Input placeholder="Postleitzahl"/>
                       <span className="input-label-inline" >Ort</span>
                       <Input className="input-text"  placeholder="Ort"/>
                   </div>
                   <div className="input-fields">
                     <span className="input-label">Land</span>
                     <Input className="input-text"  placeholder="Land"/>
                   </div>
                   <div className="input-fields">
                     <span className="input-label">Telefonnummer</span>
                     <Input className="input-text"  placeholder="Telefonnummer"/>
                   </div>
                   <div className="input-fields">
                     <Button id="button-cancel-kunde" align="right" className="button-menu">Abbrechen</Button>
                     <Button id="button-save-kunde" className="button-menu">Speichern</Button>
                   </div>

                 </Tab.Pane> },
                 { menuItem: 'Kundenliste', render: () => <Tab.Pane>
                   <h2 className="head-label">Alle Kunden anzeigen</h2>
                     {customers.map((item, index) => {
                       return(
                         <div>
                          <List divided relaxed selection verticalAlign='middle' size="large">
                           <List.Item>
                             <List.Content floated="right">
                               <Button circular="true" icon="edit"></Button>
                               <Button circular="true" icon="remove"></Button>
                             </List.Content>
                             <Image avatar src={avatar} />
                             <List.Content>
                               <Link to="/kunde/details">
                               <List.Header>{item.name}</List.Header></Link>
                               <List.Description as='a'>{item.address}</List.Description>
                             </List.Content>
                           </List.Item>
                         </List>
                       </div>
                       )
                     })}
                 </Tab.Pane> },
               ]
               } activeIndex={1} />
           </Tab.Pane> },
           { menuItem: 'Lieferanten- und Winzerverwaltung', render: () => <Tab.Pane attached={false}>
           <Tab onTabChange={this.handleTabChangeSuppliers.bind(this)} menu={{ fluid: true, vertical: true, tabular: 'right' }} panes={
             [
               { menuItem: 'Lieferant anlegen', render: () => <Tab.Pane>
                 <h2 className="head-label">Neuen Lieferanten anlegen</h2>
                 <Form onSubmit={this.handleCreateSupplier.bind(this)}>
                    <div>
                      <span className="input-label">Firma</span>
                      <Input  placeholder="Firma"/>
                    </div>
                    <div className="input-fields">
                      <span className="input-label">Vorname</span>
                      <Input   placeholder="Vorname"/>
                      <span className="input-label-inline" >Nachname</span>
                      <Input className="input-text"  placeholder="Nachname"/>
                    </div>
                    <div className="input-fields">
                      <span className="input-label">Straße und Hausnr.</span>
                      <Input className="input-text"  placeholder="Adresse"/>
                    </div>
                    <div className="input-fields">
                      <span className="input-label">Postleitzahl</span>
                      <Input  placeholder="Postleitzahl"/>
                        <span className="input-label-inline" >Ort</span>
                        <Input className="input-text"  placeholder="Ort"/>
                    </div>
                    <div className="input-fields">
                      <span className="input-label">Land</span>
                      <Input className="input-text"  placeholder="Land"/>
                    </div>
                    <div className="input-fields">
                      <span className="input-label">Telefonnummer</span>
                      <Input className="input-text"  placeholder="Telefonnummer"/>
                    </div>
                    <div className="input-fields">
                      <Button type = "reset" onClick={((e) => this.handleCancelCreateSupplier(e))} id="button-cancel-kunde" align="right" className="button-menu">Abbrechen</Button>
                      <Button id="button-save-kunde" className="button-menu">Speichern</Button>
                    </div>
                 </Form> 
               </Tab.Pane> },
               { menuItem: 'Lieferantenliste', render: () => <Tab.Pane>
                 <h2 className="head-label">Alle Lieferanten anzeigen</h2>
                 {
                   supplier.map((item, index) =>{
                     return(
                       <List divided relaxed selection verticalAlign='middle' size="large">
                        <List.Item>
                          <List.Content floated="right">
                            <Button circular="true" icon="euro sign"></Button>
                            <Button circular="true" icon="edit"></Button>
                            <Button onClick={((e) => this.handleDeleteSupplier(e, item))} circular="true" icon="remove"></Button>
                          </List.Content>
                          <Image avatar src={avatar} />
                          <List.Content>
                            <List.Header>{item.firstName} {item.lastName}</List.Header>
                            <List.Description as='a'>{item.street} {item.postcode} {item.city}</List.Description>
                          </List.Content>
                        </List.Item>
                      </List>
                     )
                   })}

               </Tab.Pane> },
             ]
               } activeIndex={this.state.activeIndexSuppliers} />
           </Tab.Pane> },
           { menuItem: 'Lagerverwaltung', render: () => <Tab.Pane attached={false}>
             <Tab onTabChange={this.handleTabChangeProducts.bind(this)} menu={{ fluid: true, vertical: true, tabular: 'right' }} panes={
               [
                { menuItem: 'Produkt anlegen', render: () => <Tab.Pane>
                  <Form onSubmit={this.handleCreateProduct.bind(this)}>
                    <h2 className="head-label">Neues Produkt anlegen</h2>
                    <div className="">
                      <span className="input-label">Produkttitel</span>
                      <Input className="input-text"  placeholder="Produkttitel"/>
                    </div>
                    <div className="input-fields">
                      <span className="input-label">Produktionsjahr</span>
                      <Input className="input-text"  placeholder="Produktionsjahr"/>
                    </div>
                    <div className="input-fields">
                      <span className="input-label">Produktherkunft</span>
                      <Input className="input-text"  placeholder="Produktherkunft"/>
                    </div>
                    <div className="input-fields">
                      <span className="input-label">Anzahl</span>
                      <Input className="input-text"  placeholder="Anzahl"/>
                    </div>
                    <div className="input-fields">
                      <span className="input-label">Einkaufspreis</span>
                      <Input className="input-text"  placeholder="Einkaufspreis"/>
                    </div>
                    <div className="input-fields">
                      <span className="input-label">Verkaufspreis</span>
                      <Input className="input-text"  placeholder="Verkaufspreis"/>
                    </div>
                    <div className="input-fields">
                      <Button type = "reset" onClick={((e) => this.handleCancelCreateProduct(e))} id="button-cancel-lager" align="right" className="button-menu">Abbrechen</Button>
                      <Button id="button-save-lager" className="button-menu">Speichern</Button>
                    </div>
                  </Form>

                </Tab.Pane> },
                { menuItem: 'Lagerbestand', render: () => <Tab.Pane>
                      <h2 className="head-label">Aktuelle Lagerbestände anzeigen</h2>
                      <div class="ui search">
                        <div class="ui icon input">
                          <input id="search-lager" class="prompt" type="text" placeholder="Nach Produkten suchen..."/>
                          <i class="search icon"></i>
                        </div>
                        <div class="results"></div>
                      </div>

                     {products.map((item, index) => {
                       return(
                         <List divided relaxed selection verticalAlign='middle' size="large">
                           <List.Item>
                             <List.Content floated="right">
                               <Button className="large-button"  circular="true" icon="plus"></Button>
                               <Button className="large-button"  circular="true" icon="minus"></Button>
                               <Button className="large-button"  circular="true" icon="edit"></Button>
                               <Button onClick={((e) => this.handleDeleteProduct(e, item))} className="large-button"  circular="true" icon="remove"></Button>
                             </List.Content>
                             <Image avatar src={wineImage} />
                             <List.Content>
                               <Link to="/lager/details">
                               <List.Header>{item.title}</List.Header></Link>
                                <List.Description as='a'>Auf Lager: {item.quantity}</List.Description>
                                <List.Description as='a'>{item.origin}</List.Description>
                                <List.Description as='a'>{item.year}</List.Description>
                             </List.Content>
                           </List.Item>
                        </List>
                       )
                     })}
    
                </Tab.Pane> },
              ]
               } activeIndex={this.state.activeIndexProducts}/>
           </Tab.Pane> },
         ]
      } />
    )
  }
}

export default Home
