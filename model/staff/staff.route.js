const staffModel = require("./staff.model");
const express = require("express");
const router = express.Router();

router.post("/add", staffModel.add);

router.get("/list", staffModel.findAll);

router.get("/view/:id", staffModel.findOne);

router.put("/update/:id", staffModel.updateById);

router.delete("/delete/:id", staffModel.deleteById);

module.exports = router;