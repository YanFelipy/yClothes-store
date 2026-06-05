// app.js
const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/user.route');

const app = express();

app.use(express.json());
app.use(cors());

// Rotas
app.use('/api/users', userRoutes);

//reqs
app.get('/', (req, res) => {
    res.send("API YClothes funcionando!");
});

module.exports = app