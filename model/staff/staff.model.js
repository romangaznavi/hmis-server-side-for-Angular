const Staff = require("./staff.schema");

module.exports.add = (req, res, next) => {
    let staffData = {
        name: req.body.name,
        position: req.body.position,
        department: req.body.department,
        gender: req.body.gender,
        mobile: req.body.mobile,
        salary: req.body.salary
    }
    Staff.create(staffData)
    .then(result => res.status(200).json(result))
    .catch(error => res.status(500).json(error));
}


module.exports.findAll = (req, res) =>{
    Staff.find()
    .then(result => res.status(200).send(result))
    .catch(error => res.status(400).send("Record not found", error)); 
}

module.exports.findOne = (req, res) =>{
    Staff.findById(req.params.id)
    .then(result => res.status(200).send(result))
    .catch(error => res.status(400).send(error));
}

module.exports.updateById = (req, res) => {
    Staff.findByIdAndUpdate(req.params.id, {
        $set:{
            name: req.body.name,
            position: req.body.position,
            department: req.body.department,
            gender: req.body.gender,
            mobile: req.body.mobile,
            salary: req.body.salary
        }
    }, {new: true})
    .then(result => res.status(200).send(result))
    .catch(error => res.status(200).send(error));
}

module.exports.deleteById = (req, res) => {
    Staff.findByIdAndDelete(req.params.id)
    .then(result => res.status(200).send({
        message: "Record Deleted Successfully"
    }))
    .catch(error => res.status(400).send(error));
}