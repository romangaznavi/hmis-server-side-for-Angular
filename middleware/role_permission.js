const jwt = require('jsonwebtoken');
const role = require('../roles');
const url = require('url');
module.exports = function(req, res, next) {
    const token = req.headers && req.headers.authorization && req.headers.authorization.split(" ")[0] == "Bearer";
    if(!token) return res.status(401).send("Access Denied, No token provided");
    try {
        const paylod = req.query.payload;
            let existUrl = role[paylod.role].find(function(url) {
                return url == req.baseUrl+""+req.path;
            });
            
            if(existUrl) 
            { 
                next();
            } 
            else {
                return res.status(401).send("Access Denied, you dont have the right privillage to perform this action"); }   
            }             
     catch (ex) {
        res.status(400).send("Invalid token");
    }
}
