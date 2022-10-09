//Require multer package
const multer = require('multer')

//set the distination and file name for uploded file to a variable called storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },

  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

//set storage variable to storage property of multer
const upload = multer({ storage: storage });

//Export multer upload
module.exports = upload