const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const users = []; //待更换为数据库存储

exports.register = (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 8);
  users.push({ username, password: hashedPassword });
  res.status(201).send({ message: "user registered successfully" });
};

exports.login = (req, res) => {
  const { username, password } = req.body;
  const user = users.find((t) => t.username === username);
  if (!user) {
    return res.status(404).send({ message: "user not found" });
  }

  const passwordIsValid = bcrypt.compareSync(password, user.password);
  if (!passwordIsValid) {
    return res.status(401).send({ message: "Invalid password" });
  }
  const token = jwt.sign({ id: user.username }, "secret_key", {
    expiresIn: 86400,
  });
  res.status(200).send({ auth: true, token });
};
