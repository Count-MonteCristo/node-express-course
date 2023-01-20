const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("./new-public"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./new-public/index.html"));
});

app.get("/sample", (req, res) => {
  return res.send("This is working");
});

app.listen(3000, () => {
  console.log("server is listening on port 3000....");
});
