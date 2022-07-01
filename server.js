const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;


// Authentication
const passport = require("passport");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const bodyParser = require("body-parser");
const cors = require("cors");
require('dotenv').config();
const User = require("./models/user");


// Define middleware for JSON parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}



// Connect to Mongoose
mongoose.connect("mongodb://localhost/tomato",
  { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
)
  .then(res => {
    // console.log("res: ", res);
    console.log("mongodb is successfully connected ✔");
  })
  .catch(err => console.log("err!: ", err))
  ;


// Parse incoming json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors({
//   origin: "http://localhost:3000", // <-- location of the react app we're connecting to
//   credentials: true
// }))


// Express sessions
app.use(session({
  secret: "secretcode",
  resave: true,
  saveUnintialized: true
}));

app.use(cookieParser("secretcode"))


// Passport middleware
app.use(passport.initialize());
app.use(passport.session());
require('./passportConfig')(passport);


app.post("/api/auth/login", (req, res, next) => {

  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.send("No User Exists");
    else {
      console.log("user is: ", user);
      req.logIn(user, (err) => {
        if (err) throw err;

        let { name, email, _id } = user;
        let userData = { name, email, _id }
        res.send(userData);
        console.log(req.user);
      });
    }
  })(req, res, next)
})


app.post("/api/auth/register", (req, res) => {
  console.log("/POST register")

  console.log("req.body:", req.body)


  User.findOne({ email: req.body.email }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send("User Already Exists");
    if (!doc) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10)
      const newUser = new User({
        email: req.body.email,
        name: req.body.name,
        password: hashedPassword
      });
      await newUser.save();
      res.send("User Created");
    }
  });
});

app.get("/api/auth/logout", (req, res) => {
  console.log("/GET logout")
  req.logout(function (err) {
    if (err) return next(err);
  })
  res.send("you are logged out successfully")
})





//api routes
app.use(routes);




app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
