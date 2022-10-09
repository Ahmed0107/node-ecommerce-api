//database configration

// 1) import mongoose
const mongoose = require("mongoose");

// 2) Connect to databasa
mongoose
  .connect(process.env.DB)
  .then(() => {console.log("Database Conected..")})
  .catch((err) => {console.log(err)})

// 3) Create a Schema
const productSchema = new mongoose.Schema({
  prodName: String,
  prodPrice: Number,
  prodImg: String,
});

// 4) create mode
const Product = mongoose.model("products", productSchema);
// Export Product Model 
module.exports = Product