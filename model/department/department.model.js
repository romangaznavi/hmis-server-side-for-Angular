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
    let condition = {};
    if (req.query && req.query.filter) {
        params = JSON.parse(req.query.filter);
    }
    if (params) {
        skip = params.all ? '' : params.skip;
        limit = params.all ? '' : limit;
        // regix is used for matching. it is like "like" operator in mysql
        // $options: 'i' is used for case insensative search
        condition = params.searchTerm && params.searchTerm.trim().length > 0 ? {departmentName: {$regex: params.searchTerm.trim(), $options: 'i'}} : {};
    }
    Department.find(condition).skip(skip).limit(limit)
    .then(result => res.status(200).send(result))
    .catch(error => {
        res.status(404).send(error);
    })
}

module.exports.countAllDepartments = (req, res, next) =>{
    let params;
    let condition = {};
    if (req.query && req.query.filter) {
        params = JSON.parse(req.query.filter);
    }
    if (params) {
    condition = params.searchTerm && params.searchTerm.trim().length > 0 ? {departmentName: {$regex: params.searchTerm.trim(), $options: 'i'}} : {};
    }
    Department.countDocuments(condition)
    .then(result =>{
        res.status(200).json(result)
    })
    .catch(error => res.status(404).send(error))
    
}

module.exports.getDetails = (req, res) => {
    let departmentId  = req.params.id;
    Department.findById(departmentId)
    .then(result =>  res.status(200).send(result))
    .catch(error => res.status(400).json("Couldn't find data with given Id", error));
}

module.exports.update =(req, res) => {
    if(!req.body.departmentName){
        return res.status(400).send({
            message: "Name cannot be empty"
        });
    }

    Department.findByIdAndUpdate(req.params.id, {
        $set: {
            departmentName: req.body.departmentName,
            departmentDesc: req.body.departmentDesc
        }
    }, {new: true})
    .then(result => {
        if(!result){
            return res.status(400).send({
                message: "Data with given Id cannot be found"
            });
        }
        return res.status(200).send(result)
    }, err => {
        console.log(err);
    });
}