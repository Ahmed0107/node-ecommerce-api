//require model
const Product = require("../model/ProductModel");

// CRUD operations
// 1) get all product
let getAllProducts = async (req, res) => {
  console.log("Get All Products Request");
  let result = await Product.find();
  res.send(result);
};

// 2) create new product
let addNewProduct = (req, res) => {
  console.log("Add new Product Request");
 try {
   let prod = new Product({
     prodName: req.body.prodName,
     prodPrice: req.body.prodPrice,
     prodImg: `${req.protocol}://${req.header('host')}/uploads/${req.file.originalname}`,
   });

   prod.save().then(() => {
     console.log("saved..");
   });

   res.send(`
    <div>
      <h1>Done</h1>
      <a href="${req.protocol}://${req.header("host")}/api/products">get All Product</a>
    </div>
   `);
 } catch (error) {
  res.send(`<h1>Error : ${error}</h1>`);
 }
};

// Export CRUDs
module.exports = {
  getAllProducts,
  addNewProduct,
};
