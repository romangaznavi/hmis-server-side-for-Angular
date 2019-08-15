const mongoose = require('mongoose');
const schema = mongoose.Schema;

const doctorSchema = new schema({ 
    name:            {type: String, required: 'Please enter doctor name', trim: true},
    qualification:   {type: String, required: true},
    department:      {type: String, required: true},
    gender:          {type: String, required: true},
    mobile:          {type: Number, required: true},
    shifts: {
        id: {type: mongoose.Schema.Types.ObjectId,  ref: 'Hospital'},
        hospitalName: {type: String, required: true},
        shift: {type: String, required: 'Please enter shift', trim: true}, 
    },
    // shift: {type: string},
    // hospital: {
    //     id: ObjectId(),
    //     name: string,
    //     logo: string
    // }

})

module.exports = mongoose.model("Doctor", doctorSchema);