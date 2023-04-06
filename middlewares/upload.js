const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../public/images"));
  },
  filename: (req, file, cb) => {
    cb(null, req.body.image);
  },
});

const upload = multer({ storage: storage }).single("file");

module.exports = upload;
