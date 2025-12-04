const express = require('express');
const cors = require('cors');
require('dotenv').config();
const Routes = require('./src/routes/Routes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/contact', Routes);

const PORT = process.env.PORT || 5100;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});