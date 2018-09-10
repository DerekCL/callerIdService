const router = require("express").Router();
const { query, number } = require("../lib/index");

router.get("/query", query);

router.post("/number", number);

module.exports = router;
