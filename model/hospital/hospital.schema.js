const mongoose = require("mongoose");

let hospitalSchema = new mongoose.Schema({
    name: {type: String, required:true},
    address: {
        country: {type: String, required: true},
        province: {type: String, required: true},
        district: {type: String, required: true}
    }
});

module.exports = mongoose.model("Hospital", hospitalSchema);
