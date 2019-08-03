const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
let User = require('../model/login/login.schema');
passport.use(new localStrategy(
   {
        usernameField: "email",
   },   
   function(email, password, done) {
       User.findOne({email: email}, function(err, user){
           if(err) { return done(err); }
           if(!user) {
               return done(null, false, { message: "Incorrect User!"});
           }
           if(!user.validatePassword(password)){
                return done(null, false, { message: "Incorrect Password!"});
           }
           return done(null, user, { message: "Authenticated!" })
       });
   }
));

module.exports = passport;

