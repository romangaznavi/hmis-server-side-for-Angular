const staffModel = require("./staff.model");
const express = require("express");
const router = express.Router();

router.post("/add", staffModel.add);
module.exports = router;