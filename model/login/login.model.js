const User = require('./login.schema');
const mongoose = require('mongoose');
const passport = require('passport');


module.exports.register = (req, res, next) => {
    const userData = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }
    User.create(userData)
    .then(result => {
        return res.status(200).json(result)
    })
    .catch(err => res.status(400).json(err));
}

 module.exports.login = (req, res, next) => {
     passport.authenticate('local', function(err, user, info) {
        if(err) { 
            return res.status(500).send(err);
        }
        if(user) {
            let data = {
                accessToken: user.generateJwt()
            }
            return res.status(200).json(data);
        } else {
            return res.status(400).json(info)
        }
     }) (req, res, next)
 }