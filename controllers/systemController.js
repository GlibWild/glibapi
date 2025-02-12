exports.hello = (req, res) => {
  res.status(200).send({ message: "hello" });
};

exports.log = (req, res) => {
  res.status(200).send({ message: "log" });
};
