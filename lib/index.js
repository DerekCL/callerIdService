function query(req, res, next) {
  const { number } = req.query;
  console.log("hello world");
  res.status(200).send(number);
}

function number(req, res, next) {
  console.log("hello world");
  res.status(200).send("hello world");
}

module.exports = { query, number };
