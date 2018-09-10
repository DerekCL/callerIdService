function query(req, res, next) {
  console.log("hello world");
  res.status(200).send("hello world");
}

function number(req, res, next) {
  console.log("hello world");
  res.status(200).send("hello world");
}

module.exports = { query, number };
