const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema({
    playerName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    character: {
        type: String,
        required: true,
        unique: true
    },
    ownedCards: {
        type: Array,
        required: false,
    }
})

module.exports = mongoose.model("Player", PlayerSchema);