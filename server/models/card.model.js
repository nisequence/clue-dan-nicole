const mongoose = require("mongoose");

const CardSchema = new mongoose.Schema({
    type: {
        type: String, // weapon, person, or room
        required: true,
    },
    title: {
        type: String, // e.g. "Miss Scarlet"
        required: true,
        unique: true
    }
})

module.exports = mongoose.model("Card", CardSchema);