const mongoose = require('mongoose');

const schema = mongoose.Schema;

const patientSchema = new schema({
    name: { type: String, required: 'Name required', trim: true },
    age: { type: Number, required: 'Age is required', trim: true },
    gender: { type: String, required: 'Gender is required', trim: true },
    address: { type: String, required: 'Address is required', trim: true },
    mobile: { type: Number, required: 'Phone # is rquired', trim: true },
    blood_group: { type: String, required: "Blood group is required", trim: true },
    diagnosis: { type: String, required: 'Diagnosis is required', trim: true },
    medicalRecord: {
        dateOfExamination: { type: Date, required: "Date is required", trim: true },
    },
    hospitalData: {
        id: {type: mongoose.Schema.Types.ObjectId, ref: 'Hospital'},
        hospitalName: {type: String, required: 'Hospital Name is required', trim: true }   
    },
    patientDoctor: {
        doctorID: {type: mongoose.Schema.Types.ObjectId, ref: 'Doctor'},
        doctorName: {type: String, required: "Doctor Name is required", trim: true} 
    }
})

module.exports = mongoose.model("Patient", patientSchema);