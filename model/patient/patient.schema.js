const mongoose = require('mongoose');

const schema = mongoose.Schema;

const patientSchema = new schema({
    name: { type: String, required: 'Name required', trim: true },
    diagnosis: { type: String, required: true },
    address: { type: String, required: true },
    mobile: { type: Number, required: true },
    gender: { type: String, required: true },
    medicalRecord: {
        dateOfExamination: { type: Date, required: true },
    },
    hospitalData: {
        id: {type: mongoose.Schema.Types.ObjectId, ref: 'Hospital'},
        hospitalName: {type: String, required: true }   
    },
    patientDoctor: {
        doctorID: {type: mongoose.Schema.Types.ObjectId, ref: 'Doctor'},
        doctorName: {type: String, required: true}
    }
})

module.exports = mongoose.model("Patient", patientSchema);