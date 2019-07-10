const doctorModel = require('./doctor.model');
const express = require('express');
const router = express.Router();

router.post("/add", doctorModel.add);
module.exports = router;