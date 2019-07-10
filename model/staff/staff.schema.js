const mongoose = require('mongoose');

const schema = mongoose.Schema;

const staffSchema = new schema ({
    name:       {type: String, required: true },
    position:   {type: String, required: true },
    department: {type: String, required: true },
    gender:     {type: String, required: true },
    mobile:     {type: String, required: true },
    salary:     {type: Number, required: true }

})

module.exports = mongoose.model("Staff", staffSchema);