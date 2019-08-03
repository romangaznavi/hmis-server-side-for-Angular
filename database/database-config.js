const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/hmis',{ useNewUrlParser: true })
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.log("Not Connected to MongoDB...", err));

module.exports = mongoose