const mongoose = require("mongoose");
const schema = mongoose.Schema;

const departmentSchema = new schema ({
    departmentName: { type: String, required: "Name is required", trim: true },
    departmentDesc: { type: String }
})

module.exports = mongoose.model("department", departmentSchema);