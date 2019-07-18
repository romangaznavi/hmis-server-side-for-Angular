const Department = require('./department.schema');

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
    if (req.query && req.query.limit) {
        limit = req.query.limit;
    }

    if (req.query && req.query.skip) {
        skip = req.query.skip;
    }
    console.log(skip,'Skip');
    Department.find()
    .limit(limit)
    .skip(skip)
    .then(result => res.status(200).send(result))
    .catch(error => res.status(404).send(error))
}

module.exports.countAllDepartments = (req, res, next) =>{
    
   Department.countDocuments()
    .then(result =>{
        res.status(200).json(result)
    } )
    .catch(error => res.status(404).send(error))
    
}

