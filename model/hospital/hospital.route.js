
const HospitalModel = require("./hospital.model");
const express = require("express");
const router = express.Router();

router.post("/add", HospitalModel.add);

module.exports = router;