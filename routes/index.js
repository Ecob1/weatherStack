const express = require("express");
const router = express.Router();
router.use("/", require("./swagger"));
router.use("/weather", require("./weather"));

module.exports = router;
