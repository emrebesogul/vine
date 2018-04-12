import $ from 'jquery';

var getUrl = window.location;
var url = getUrl.protocol + "//" + getUrl.hostname + ":8000/rest";

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

