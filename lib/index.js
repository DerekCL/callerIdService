function index(req, res, next) {
  console.log("hello world");
  res.status(200).send("hello world");
}
module.exports = { index };
