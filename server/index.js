const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const jsonParser = bodyParser.json();
const database = require('./database');
const url = 'mongodb://127.0.0.1:27017/vine';


//==================================================================================================//
//Enable CORS
app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  if (req.method === "OPTIONS") {
      res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
      return res.status(200).json({});
  }
  next();
});



//==================================================================================================//
MongoClient.connect(url, function(err, client) {
    if (err) {
        console.log('Unable to connect to MongoDB');
        throw err;
    } else {
        console.log("Successfully connected to MongoDB");
        app.use(bodyParser.json());

        /* Calls the method listCustomers that returns all customers to the react application. */
        app.get('/rest/customer/list', (req, res) => {
            database.listCustomers(client.db('vine'), res);
        });

        /* Calls the method listProducts that returns all products to the react application. */
        app.get('/rest/product/list', (req, res) => {
            database.listProducts(client.db('vine'), res);
        });

        /* Calls the method listSupplier that returns all supplier to the react application. */
        app.get('/rest/supplier/list', (req, res) => {
            database.listSuppliers(client.db('vine'), res);
        });

        /* Calls the method createCustomer that creates a new customer in the database. */
        app.post('/rest/customer/create', (req, res) => {
            let customerData = req.body.customerData;
            database.createCustomer(client.db('vine'), res, customerData);
        });

        /* Calls the method createProduct that creates a new product in the database. */
        app.post('/rest/product/create', (req, res) => {
            let productData = req.body.productData;
            database.createProduct(client.db('vine'), res, productData);
        });

        /* Calls the method createSupplier that creates a new supplier in the database. */
        app.post('/rest/supplier/create', (req, res) => {
            let supplierData = req.body.supplierData;
            database.createSupplier(client.db('vine'), res, supplierData);
        });

        /* Calls the method deleteCustomer that removes the customer from the database. */
        app.post('/rest/customer/delete', (req, res) => {
            let customerId = req.body.customerId;
            database.deleteCustomer(client.db('vine'), res, customerId);
        });

        /* Calls the method deleteProduct that removes the product from the database. */
        app.post('/rest/product/delete', (req, res) => {
            let productId = req.body.productId;
            database.deleteProduct(client.db('vine'), res, productId);
        });

        /* Calls the method deleteSupplier that removes the supplier from the database. */
        app.post('/rest/supplier/delete', (req, res) => {
            let supplierId = req.body.supplierId;
            database.deleteSupplier(client.db('vine'), res, supplierId);
        });



        app.listen(8000, function() {
            console.log('Listening for API Requests on port 8000...')
        })
    }
});
