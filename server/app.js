require('dotenv').config();
const express = require('express');
const cors = require('cors');

const mainRoutes = require('./routes/mainRoutes');
const authRoutes = require('./routes/authRoutes');

const PORT = process.env.PORT || 4000;

const app = express();

app.use(express.json());

app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}));


// app.use('/api/manage', mainRoutes);
app.use('/api/auth', authRoutes);

app.listen(PORT, () => console.log(`Server up and running on port ${PORT}`));