// app.js
const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

// Routes
const userRoutes = require('./routes/user.route');
const uploadRoutes = require("./routes/upload.route");
app.use("/api/upload", uploadRoutes)
app.use('/api/users', userRoutes);

//reqs
app.get('/', (req, res) => {
    res.send("API YClothes funcionando!");
});

module.exports = app