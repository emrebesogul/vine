import $ from 'jquery';

const getUrl = window.location;
const url = getUrl.protocol + "//" + getUrl.hostname + ":8000/rest";

export const updateCustomer=(customerData) => {
    return new Promise((resolve, reject) => {
        $.ajax({
          url: url + "/customer/edit",
          contentType: "application/json",
          type: "PUT",
          data: JSON.stringify({customerData: customerData}),
          success: function(data) {
            resolve(data);
          },
          error: function(xhr, status, err) {
            reject(err);
          }
      });
    });
}

export const updateSupplier=(supplierData) => {
    return new Promise((resolve, reject) => {
        $.ajax({
          url: url + "/supplier/edit",
          contentType: "application/json",
          type: "PUT",
          data: JSON.stringify({supplierData: supplierData}),
          success: function(data) {
            resolve(data);
          },
          error: function(xhr, status, err) {
            reject(err);
          }
      });
    });
}

export const updateProduct=(productData) => {
    return new Promise((resolve, reject) => {
        $.ajax({
          url: url + "/product/edit",
          contentType: "application/json",
          type: "PUT",
          data: JSON.stringify({productData: productData}),
          success: function(data) {
            resolve(data);
          },
          error: function(xhr, status, err) {
            reject(err);
          }
      });
    });
}