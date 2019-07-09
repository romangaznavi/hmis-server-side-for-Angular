const Hospital = require("./hospital.schema");

module.exports.add = (req, res, next) => {
    console.log("Add Hospital");
    let hospitalData = {
        name: req.body.name,
        address: {
            country: req.body.country,
            province: req.body.province,
            district: req.body.district
        }
    }
    Hospital.create(hospitalData)
    .then(result => res.status(200).json({result}))
    .catch(error => res.status(500).json(error));
}