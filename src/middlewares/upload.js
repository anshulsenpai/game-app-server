const multer = require("multer");
const path = require("path");

console.log("multer started")
console.log("Current working directory: " + process.cwd());

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../images"));
  },
  filename: (req, file, cb) => {
    cb(null, req.body.image);
  },
});

const upload = multer({ storage: storage }).single("file");

module.exports = upload;
