const Patient = require('./patient.schema');

module.exports.add = (req, res, next) =>{
    let patientData = {
        name: req.body.name,
        diagnosis: req.body.diagnosis,
        address: req.body.address,
        mobile: req.body.mobile,
        gender: req.body.gender,
        medicalRecord: {
            dateOfExamination: req.body.dateOfExamination,
        },
        hospitalData: {
            id: req.body.id,
            hospitalName: req.body.hospitalName  
        },
        patientDoctor: {
            doctorID: req.body.doctorID,
            doctorName: req.body.doctorName
        }
    }
    Patient.create(patientData)
    .then(result => res.status(200).json({result}))
    .catch(error => res.status(200).json({error}));
} 