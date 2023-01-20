const consoleLog = (req, res, next) => {
  console.log("Practice middleware statement");
  next();
};

module.exports = consoleLog;
