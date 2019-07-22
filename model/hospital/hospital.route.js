
const HospitalModel = require("./hospital.model");
const express = require("express");
const router = express.Router();

router.post("/add", HospitalModel.add);

router.get("/list", HospitalModel.findAll);

router.get("/view/:id", HospitalModel.findOne);

router.put("/update/:id", HospitalModel.update);

router.delete("/delete/:id", HospitalModel.deleteById);

router.get("/count", HospitalModel.countAllHospitals);


module.exports = router;

