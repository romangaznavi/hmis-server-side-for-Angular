const Patient = require('./patient.schema');
const Hospital = require('../hospital/hospital.schema');
module.exports.add = async (req, res, next) =>{
    try {

        let hospital = await getHospitalById(req.body.hospitalId);
        // console.log(hospital);
        let doctor = await getDoctorById(req.body.doctorId);
        if (doctor || !doctor.name) {
            res.status(500).json({message :"Doctor can not be found"})
        }
        console.log(doctor, 'Doctor list')
        let patientData = {
        name: req.body.name,
        age: req.body.age,
        gender: req.body.gender,
        address: req.body.address,
        mobile: req.body.mobile,
        blood_group: req.body.bloodGroup,
        diagnosis: req.body.diagnosis,
        medicalRecord: {
            dateOfExamination: new Date(),
        },
        hospitalData: {
            id: hospital._id,
            hospitalName: hospital.name  
        },
        patientDoctor: {
            doctorID: req.body.doctorId,
            doctorName: doctor.name
        }
    }
    Patient.create(patientData)
    .then(result => res.status(200).json({result}))
    .catch(error => res.status(500).json({error}));
     
    } catch (error) {
        return error;
    }
}

async function getHospitalById(hospitalId){
    try {
        const hospital = await Hospital.findById(hospitalId);
        return hospital;
    } catch (error) {
        return error;
    }
}

 async function getDoctorById(doctorId){
    try {
        const doctor = await doctor.findById(doctorId);
        return doctor;
    } catch (error) {
        return new Error(error);
    }
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