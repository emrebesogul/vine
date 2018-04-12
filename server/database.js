var ObjectId = require('mongodb').ObjectId;

var call = module.exports = {

    /* List Products */
    listProducts: function (db, res) {
        db.collection("products").find({}).toArray((err, result) => {
            if (err) throw err;
            res.status(200).send(result);
        }); 
    },

    /* List Suppliers */
    listSuppliers: function (db, res) {
        db.collection("suppliers").find({}).toArray((err, result) => {
            if (err) throw err;
            res.status(200).send(result);
        });
    },

    /* Create Product */
    createProduct: function (db, res, productData) {
        console.log(JSON.stringify(productData));
    },

    /* Create Supplier */
    createSupplier: function (db, res, supplierData) {
        db.collection('suppliers').insert({
            "company" : supplierData.company,
            "firstName" : supplierData.firstName,
            "lastName" : supplierData.lastName,
            "street" : supplierData.street,
            "postcode" : supplierData.postcode,
            "city" : supplierData.city,
            "country" : supplierData.country,
            "phoneNumber" : supplierData.phoneNumber
        }, (err, result) => {
            if (err) throw err;
            res.status(200).send(true);
        });
    },

    /* Delete Product */
    deleteProduct: function (db, res, productId) {
        db.collection("products").remove({ _id : new ObjectId(productId) }, (err, docs) => {
            if (err) throw err;
            res.status(200).send(true);
        });
    },

    /* Delete Supplier */
    deleteSupplier: function (db, res, supplierId) {
        db.collection("suppliers").remove({ _id : new ObjectId(supplierId) }, (err, docs) => {
            if (err) throw err;
            res.status(200).send(true);
        });
    },

}
