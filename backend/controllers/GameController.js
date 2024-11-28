const Game = require('../models/Game');

// Get all games
exports.getAllGames = async (req, res) => {
    try {
        const games = await Game.find().populate('publisher');
        res.status(200).json(games);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get game by ID
exports.getGameById = async (req, res) => {
    try {
        const game = await Game.findById(req.params.id).populate('publisher');
        if (!game) return res.status(404).json({ message: 'Game not found' });
        res.status(200).json(game);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Create a new game
exports.createGame = async (req, res) => {
    try {
        const newGame = new Game(req.body);
        await newGame.save();
        res.status(201).json(newGame);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Update a game
exports.updateGame = async (req, res) => {
    try {
        const updatedGame = await Game.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedGame);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete a game
exports.deleteGame = async (req, res) => {
    try {
        await Game.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Game deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
