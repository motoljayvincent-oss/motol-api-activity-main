require('dotenv').config();
const connectDB = require('./src/config/db');
const express = require('express');
const app = express();
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
// Load Config

const PORT = process.env.PORT || 3000;
const BASE_URI = process.env.BASE_URI || '/api/v1';

// Import Routes
const apiRoutes = require('./src/routes/apiRoutes');
<<<<<<< HEAD
const authRoutes = require('./src/routes/authRoutes');
=======
>>>>>>> 568f697423e97f01cbcf6da81fc7e1855f44fbb6
app.use(BASE_URI, apiRoutes);
// app.use(process.env.BASE_URI, apiRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Base URI: http://localhost:${PORT}${BASE_URI}`);
});