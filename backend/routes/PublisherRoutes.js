const express = require('express');
const router = express.Router();
const PublisherController = require('../controllers/PublisherController');

// Define Publisher routes
router.get('/', PublisherController.getAllPublishers); // Get all publishers
router.post('/', PublisherController.createPublisher); // Create a new publisher

module.exports = router; // Export the router object
