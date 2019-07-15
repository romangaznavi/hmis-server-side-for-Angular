const departmentModel = require('./department.model');
const express = require('express');
const router = express.Router();

router.post("/add", departmentModel.add);

router.get('/list', departmentModel.findAll);

module.exports = router;