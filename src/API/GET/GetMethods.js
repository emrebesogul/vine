import $ from 'jquery';

var getUrl = window.location;
var url = getUrl.protocol + "//" + getUrl.hostname + ":8000/rest";

export const getCustomers = () => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: url + "/customer/list",
            dataType:'json',
            cache: false,
            type: "GET",
            success: function(res) {
                resolve(res);
            },
            error: function(xhr, status, err){
                reject(err);
            }
        });
    });
}

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: url + "/product/list",
            dataType:'json',
            cache: false,
            type: "GET",
            success: function(res) {
                resolve(res);
            },
            error: function(xhr, status, err){
                reject(err);
            }
        });
    });
}

export const getSuppliers = () => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: url + "/supplier/list",
            dataType:'json',
            cache: false,
            type: "GET",
            success: function(res) {
                resolve(res);
            },
            error: function(xhr, status, err){
                reject(err);
            }
        });
    });
}
