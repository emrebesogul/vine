import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home'
import ProductDetails from './components/Product_Details'
import EditProduct from './components/Product_Edit'
import CustomerDetails from './components/Customer_Details'
import EditCustomer from './components/Customer_Edit'
import SupplierDetails from './components/Supplier_Details'
import EditSupplier from './components/Supplier_Edit'
import Pricelist from './components/Pricelist'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/product/details' component={ProductDetails} />
            <Route exact path='/product/edit' component={EditProduct} />
            <Route exact path='/customer/details' component={CustomerDetails} />
            <Route exact path='/customer/edit' component={EditCustomer} />
            <Route exact path='/supplier/details' component={SupplierDetails} />
            <Route exact path='/supplier/edit' component={EditSupplier} />
            <Route exact path='/supplier/pricelist' component={Pricelist} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
