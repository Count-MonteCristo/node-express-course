//check username, password in post (login) request
//if it exists, create new JWT. Otherwise, send error response
//if JWT is created, send it to front-end
//setup authentication so only request with JWT can acess the dashboard

const jwt = require("jsonwebtoken");
const { BadRequestError } = require("../errors");

const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    throw new BadRequestError("Please provide email and password");
  }

  //just for demo, normally provided by DB
  const id = new Date().getDate();

  //keep payload small, better for UX. Also, in prod make sure to use a long unguessable string
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.status(200).json({ msg: "user created", token });
};

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);

  res.status(200).json({
    msg: `Hello, ${req.user.username}`,
    secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
  });
};

module.exports = {
  login,
  dashboard,
};
