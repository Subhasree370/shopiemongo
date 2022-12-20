const mongodb = require('mongodb');
const getDb = require('../util/database').getDb;


class Product {

  constructor(id, title, price, imageUrl, description) {
    
    this._id = id;
    this.title = title;
    this.price = price;
    this.imageUrl = imageUrl;
    this.description = description;
  };


  save() {
    const db = getDb();
    return db.collection("products").insertOne(this).then(result => {

    }).catch(err => {
      console.log(err);
    });
  }

  static fetchAll(){
    const db = getDb();
    return db.collection("products").find().toArray().then(result => {
      return result;
    }).catch(err => {
      console.log(err);
    })
  }

  static findById(prodId){
    const db = getDb();
    return db.collection("products").find({_id: new mongodb.ObjectId(prodId)}).next().then(result => {
      console.log(result);
      return result;
    }).catch(err => {
      console.log(err);
    })
  }


}


module.exports = Product;
