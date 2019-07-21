const doctorModel = require('./doctor.model');
const express = require('express');
const router = express.Router();

router.post("/add", doctorModel.add);
module.exports = router; 


router.get("/list", doctorModel.findAll); // /doctor/list

router.get("/view/:id", doctorModel.findOne);

router.put("/update/:id", doctorModel.update);

router.delete("/delete/:id", doctorModel.deleteById);

router.get("/total", doctorModel.countAllDoctors);