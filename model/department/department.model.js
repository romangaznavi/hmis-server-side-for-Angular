const Department = require('./department.schema');
const role_permission = require('../../middleware/role_permission');

module.exports.add = (req, res) => {
    let departmentData = {
        departmentName: req.body.departmentName,
        departmentDesc: req.body.departmentDescription
    }
    console.log(req.body);
    Department.create(departmentData)
    .then(result => res.status(200).send({
        message: "Data Added!"
    }))
    .catch(error =>res.status(404).send({
        message: "There is an error adding data", error
    }))
}

module.exports.findAll = (req, res) => {
    let limit=1; 
    let skip=0;
    let params;
    if (req.query && req.query.filter) {
        params = JSON.parse(req.query.filter);
    }
    if (params) {
        skip = params.skip;
    }
    Department.find().skip(skip).limit(limit)
    .then(result => res.status(200).send(result))
    .catch(error => {
        res.status(404).send(error);
    })
}

module.exports.countAllDepartments = (req, res, next) =>{
   Department.countDocuments()
    .then(result =>{
        res.status(200).json(result)
    })
    .catch(error => res.status(404).send(error))
    
}

