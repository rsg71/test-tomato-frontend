const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const spanishSchema = new Schema({

    word: String,
    translation: String,
    answeredCorrectly: Boolean,
});

const Spanish = mongoose.model("Yamaha", spanishSchema);

module.exports = Spanish;
