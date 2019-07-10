 const patientModel = require('./patien.model');
 const express = require('express');
 const router = express.Router();

 router.post("/add", patientModel.add);
 module.exports = router;