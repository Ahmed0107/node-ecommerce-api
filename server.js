require('dotenv').config()
const express = require("express");
const productRouter = require("./routes/productRouter");

const app = express();
const cors = require("cors");

app.use(
  cors({
    // origin: "http://127.0.0.1:5501",
    origin : "*"
  })
);

app.use("/uploads", express.static("uploads"));
app.use("/product", express.static("public"));

//use Routers
app.use("/", productRouter);


const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`Server listening  ...`);
});
