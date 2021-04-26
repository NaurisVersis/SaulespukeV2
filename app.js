const express = require("express");
const path = require("path");

const app = express();
app.use(express.static(path.join(__dirname, "/")));

app.get("/", function (req,res) {
  res.sendFile(__dirname + "/index.html");
  console.log(__dirname);
})













app.listen(3000, function() {
  console.log("Server started on port 3000");
});
