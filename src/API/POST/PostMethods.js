import $ from 'jquery';

var getUrl = window.location;
var url = getUrl.protocol + "//" + getUrl.hostname + ":8000/rest";

export const createCustomer = (customerData) => {
    return new Promise((resolve, reject) => {
        $.ajax({
          url: url + "/customer/create",
          type: "POST",
          cache: false,
          contentType: 'application/json',
          data: JSON.stringify({customerData: customerData}),
          success: function(res) {
              resolve(res);
          },
          error: function(xhr, status, err){
              reject(err);
          }
        });
    });
}

export const createProduct = (productData) => {
    return new Promise((resolve, reject) => {
        $.ajax({
          url: url + "/product/create",
          type: "POST",
          cache: false,
          contentType: 'application/json',
          data: JSON.stringify({productData: productData}),
          success: function(res) {
              resolve(res);
          },
          error: function(xhr, status, err){
              reject(err);
          }
        });
    });
}

export const createSupplier = (supplierData) => {
    return new Promise((resolve, reject) => {
        $.ajax({
          url: url + "/supplier/create",
          type: "POST",
          cache: false,
          contentType: 'application/json',
          data: JSON.stringify({supplierData: supplierData}),
          success: function(res) {
              resolve(res);
          },
          error: function(xhr, status, err){
              reject(err);
          }
        });
    });
}

export const deleteCustomer = (customerId) => {
    return new Promise((resolve, reject) => {
        $.ajax({
          url: url + "/customer/delete",
          type: "POST",
          cache: false,
          contentType: 'application/json',
          data: JSON.stringify({customerId: customerId}),
          success: function(res) {
              resolve(res);
          },
          error: function(xhr, status, err){
              reject(err);
          }
        });
    });
}

export const deleteProduct = (productId) => {
    return new Promise((resolve, reject) => {
        $.ajax({
          url: url + "/product/delete",
          type: "POST",
          cache: false,
          contentType: 'application/json',
          data: JSON.stringify({productId: productId}),
          success: function(res) {
              resolve(res);
          },
          error: function(xhr, status, err){
              reject(err);
          }
        });
    });
}

export const deleteSupplier = (supplierId) => {
    return new Promise((resolve, reject) => {
        $.ajax({
          url: url + "/supplier/delete",
          type: "POST",
          cache: false,
          contentType: 'application/json',
          data: JSON.stringify({supplierId: supplierId}),
          success: function(res) {
              resolve(res);
          },
          error: function(xhr, status, err){
              reject(err);
          }
        });
    });
}
