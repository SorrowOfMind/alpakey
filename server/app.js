require('dotenv').config();
const express = require('express');
const cors = require('cors');

const mainRoutes = require('./routes/mainRoutes');

const PORT = process.env.PORT || 4000;

const app = express();


app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}));

// app.use(express.json());

// app.use('/api/manage', mainRoutes);


app.listen(PORT, () => console.log('Server up and running'));