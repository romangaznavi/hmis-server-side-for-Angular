const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
    if (req.headers && req.headers.authorization && req.headers.authorization.split(" ")[0] == "Bearer") {
        const decoded = jwt.verify(req.headers.authorization.split(" ")[1],"qazwsx");
        req.query.payload = decoded
        next();
    } else {
        res.status(400).send("Token is required");
    }
}