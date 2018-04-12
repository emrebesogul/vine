var ObjectId = require('mongodb').ObjectId;

var call = module.exports = {

    /* List Products */
    listProducts: function (db, res) {
        db.collection("products").find({}).toArray((err, result) => {
            if (err) throw err;
            res.status(200).send(result);
            db.close();
        }); 
    },

    /* List Suppliers */
    listSuppliers: function (db, res) {
        db.collection("suppliers").find({}).toArray((err, result) => {
            if (err) throw err;
            res.status(200).send(result);
            db.close();
        });
    },

    /* Delete Product */
    listProducts: function (db, res, productId) {
        db.collection("products").remove({ _id : new ObjectId(productId) }, (err, docs) => {
            if (err) throw err;
            res.send(true);
        });
    },

    /* Delete Supplier */
    listSuppliers: function (db, res, supplierId) {
        db.collection("suppliers").remove({ _id : new ObjectId(supplierId) }, (err, docs) => {
            if (err) throw err;
            res.send(true);
        });
    },

}
