// Require express module to apply routing
const express = require("express");

//Require Controller
const productController = require("../controller/ProductController");

//Requre path module to send static html files
const path = require("path");

//Require uploader (Multer uploader)
const upload = require("../fileUploader/fileUploader");

//Require express.Router()
const router = express.Router();

//Applying routs
router.get("/product", (req, res) => {
  res.sendFile(
    path.join(__dirname, ["../public/index.html", "../public/style.css"])
  );
});

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/main.html"));
});


router.get("/api/products", productController.getAllProducts);

router.post(
  "/api/image-upload",
  upload.single("image"),
  productController.addNewProduct
);

//Export router
module.exports = router;
