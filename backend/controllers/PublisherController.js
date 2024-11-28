const Publisher = require('../models/Publisher');

// Get all publishers
exports.getAllPublishers = async (req, res) => {
    try {
        const publishers = await Publisher.find();
        res.status(200).json(publishers);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Create a new publisher
exports.createPublisher = async (req, res) => {
    try {
        const newPublisher = new Publisher(req.body);
        await newPublisher.save();
        res.status(201).json(newPublisher);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
