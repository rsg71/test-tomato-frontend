const User = require("./models/user");
const bcrypt = require("bcryptjs");
const localStrategy = require('passport-local').Strategy;

module.exports = function (passport) {
    passport.use(
        new localStrategy((email, password, done) => {
            User.findOne({ email: email }, (err, user) => {
                if (err) throw err;
                if (!user) return done(null, false);
                bcrypt.compare(password, user.password, (err, result) => {
                    if (err) throw err;
                    if (result) {
                        console.log("user is authenticated!!!!")
                        return done(null, user);
                    } else {
                        return done(null, false);
                    }
                });
            });
        })
    );

    // We need these methods to support login sessions (cookies in browser upon login)
    passport.serializeUser((user, cb) => {
        cb(null, user.id);
    })
    passport.deserializeUser((id, cb) => {
        User.findOne({ _id: id }, (err, user) => {
            const userInformation = {
                email: user.email,
                id: user._id
            };
            cb(err, userInformation)
        });
    });
};
