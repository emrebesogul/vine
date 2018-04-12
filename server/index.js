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

        /* Calls the method listProducts that returns all products to the react application */
        app.get('/rest/product/list', (req, res) => {
            database.listProducts(client.db('vine'), res);
        });

        /* Calls the method listSupplier that returns all supplier to the react application */
        app.get('/rest/supplier/list', (req, res) => {
            database.listProducts(client.db('vine'), res);
        });



        app.listen(8000, function() {
            console.log('Listening for API Requests on port 8000...')
        })
    }
});
