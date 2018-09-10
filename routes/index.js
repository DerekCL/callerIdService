const router = require("express").Router();
const { index, query, number } = require("../lib/index");

// Index route to the index page.
router.post("/", index);

router.get("/query", query);

router.post("/number", number);

module.exports = router;
