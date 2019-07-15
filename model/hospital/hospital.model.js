const Hospital = require("./hospital.schema");

module.exports.add = (req, res, next) => {
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

module.exports.findAll = (req, res) => {
    Hospital.find()
    .then(result => res.status(200).send(result))
    .catch(error => res.status(404).send(error)); 
}

module.exports.findOne = (req, res) =>{
    Hospital.findById(req.params.id)
    .then(result => res.status(200).send(result))
    .catch(error => res.status(404).send("Data not found", error));
}

module.exports.update = (req, res) => {
    Hospital.findByIdAndUpdate(req.params.id, {
        $set: {
            name: req.body.name,
            address: {
                country: req.body.country,
                province: req.body.province, 
                district: req.body.district
            }
        }
    }, {new: true})
    .then(result => res.status(200).send(result))
    .catch(error => res.status(404).send("Data with given Id not found", error));
}

module.exports.deleteById = (req, res) => {
    Hospital.findByIdAndDelete(req.params.id)
    .then(result => res.status(200).send({
        message: "Deleted Successfull"
    })).catch(error => res.status(404).send({
        message: "Data with given ID not found"
    }));
}