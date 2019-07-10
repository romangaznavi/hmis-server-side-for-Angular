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
