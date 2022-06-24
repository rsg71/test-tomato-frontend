const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;



// Define middleware for JSON parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//api routes
app.use(routes);


// Connect to Mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/rgLanguage",
  { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
)
.then(res => {
  // console.log("res: ", res);
  console.log("mongodb is successfully connected ✔");
})
.catch(err => console.log("err!: ", err))
;


app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
