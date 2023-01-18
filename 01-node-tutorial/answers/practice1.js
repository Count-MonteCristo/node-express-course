const practiceSentence = require("./practice2");
const os = require("os");
const fs = require("fs");

fs.writeFile(
  "./content/practice.txt",
  `${practiceSentence.sentence}, my name is ${os.userInfo().username}`,
  (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
  }
);
