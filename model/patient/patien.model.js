const Patient = require('./patient.schema');

module.exports.add = (req, res, next) =>{
    let patientData = {
        name: req.body.name,
        age: req.body.age,
        gender: req.body.gender,
        address: req.body.address,
        mobile: req.body.mobile,
        blood_group: req.body.blood_group,
        diagnosis: req.body.diagnosis,
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

module.exports.findAll = (req, res) => {
    Patient.find()
    .then(result => res.status(200).send(result))
    .catch(error => res.status(404).send({
        message: "Data not found"
    })); 
}

module.exports.findOne = (req, res) => {
    Patient.findById(req.params.id)
    .then(result => res.status(200).send(result))
    .catch(error => res.status(404).send({
        message: "Data with given ID not found"
    }))
}

module.exports.update = (req, res) =>{
    Patient.findByIdAndUpdate(req.params.id, {
        $set:{
            name: req.body.name,
            age: req.body.age,
            gender: req.body.gender,
            address: req.body.address,
            mobile: req.body.mobile,
            blood_group: req.body.blood_group,
            diagnosis: req.body.diagnosis,
            medicalRecord: {
                dateOfExamination: req.body.dateOfExamination,
            },
            hospitalData: {
                hospitalName: req.body.hospitalName  
            },
            patientDoctor: {
                doctorName: req.body.doctorName
            }
        }
    }, {new: true})
    .then(result => res.status(200).send(result))
    .catch(error => res.status(404).send(error));
}

module.exports.deleteById = (req, res) =>{
    Patient.findByIdAndDelete(req.params.id)
    .then(result => res.status(200).send({
        message: "Record Deleted"
    })).catch(error => res.status(404).send({
        message: "Record not found"
    }))
}