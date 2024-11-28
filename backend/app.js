const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes/index');

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Use built-in express.json() instead of bodyParser (deprecated)

// Use Routes
app.use('/api', routes);

// Connect to MongoDB
const MONGO_URI = 'mongodb+srv://bandersaleh:RtcPassword@cluster0.afr3spq.mongodb.net/csi244-Midterm?retryWrites=true&w=majority';
mongoose
    .connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => {
        console.error('❌ Failed to connect to MongoDB:', err.message);
        process.exit(1); // Exit the process if the connection fails
    });

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
