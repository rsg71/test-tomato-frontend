const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const spanishSchema = new Schema({
    email: String,
    name: String,
    password: String,
});

const Spanish = mongoose.model("User", spanishSchema);

module.exports = Spanish;
