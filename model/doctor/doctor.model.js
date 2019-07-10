const Doctor = require('./doctor.schema');

module.exports.add = (req, res, next) => { 
    let doctorData = {
        name: req.body.name,
        qualification: req.body.qualification,
        department: req.body.department,
        gender: req.body.gender,
        mobile: req.body.mobile,
        shifts: { 
            id: req.body.hospitalID,
            hospitalName: req.body.hospitalName,
            shift: req.body.shift
        }
    }
    Doctor.create(doctorData)
    .then(result =>res.status(200).json({result}))
    .catch(error =>res.status(500).json({error}));
}

