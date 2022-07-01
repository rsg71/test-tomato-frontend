const mongoose = require("mongoose");
const db = require("../models");
const spanishSeed = require("../utils/spanishSeed");

// This file empties the spanish collection and inserts the spanish words & translations below

require('dotenv').config();

console.log("mongodb is: ", process.env.MONGODB_URI)

mongoose.connect(
    process.env.MONGODB_UR || "mongodb://localhost/tomato"
).then(res => {
    console.log("connected successfully: ", res.connections[0]._connectionString)
})
    .catch(err => console.log("error:", err))



db.Spanish
    .remove({})
    .then(() => db.Spanish.collection.insertMany(spanishSeed))
    .then(data => {
        console.log(data.result.n + " records inserted for spanish seed");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(0);
    });

