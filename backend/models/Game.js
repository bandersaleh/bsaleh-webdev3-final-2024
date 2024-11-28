const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    title: { type: String, required: true },
    genre: { type: String, required: true },
    releaseDate: { type: Date, default: Date.now },
    publisher: { type: mongoose.Schema.Types.ObjectId, ref: 'Publisher' }, // Reference to Publisher
});

module.exports = mongoose.model('Game', gameSchema);
