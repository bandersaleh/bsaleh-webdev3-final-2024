const express = require('express');
const router = express.Router();
const gameRoutes = require('./GameRoutes'); // Import game routes
const publisherRoutes = require('./PublisherRoutes'); // Import publisher routes

// Use the imported routes
router.use('/games', gameRoutes); // Correct usage: pass a valid router object
router.use('/publishers', publisherRoutes); // Correct usage: pass a valid router object

module.exports = router; // Export the router object
