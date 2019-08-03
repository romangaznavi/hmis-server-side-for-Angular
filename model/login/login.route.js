const userModel = require('./login.model');
const express = require('express');
const router = express.Router();

router.post('/register', userModel.register);
router.post('/login', userModel.login); 

router.get('/', (req, res, next) => {
    res.send({ message: "Default route called!"});
})

module.exports = router;