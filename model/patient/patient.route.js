 const patientModel = require('./patien.model');
 const express = require('express');
 const router = express.Router();

 router.post("/add", patientModel.add);

router.get("/list", patientModel.findAll); 


router.get("/count", patientModel.count);

router.get("/view/:id", patientModel.findOne);

router.put("/update/:id", patientModel.update);

router.delete("/delete/:id", patientModel.deleteById);

 module.exports = router;