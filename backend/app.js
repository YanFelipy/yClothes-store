const express = require('express');
const cors = require('cors');


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());


const userRoutes = require('./routes/user.route');
const uploadRoutes = require("./routes/upload.route");
const productRoutes = require('./routes/product.route');


app.use("/api/upload", uploadRoutes);
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);


app.get('/', (req, res) => {
    res.send("API YClothes funcionando!");
});

module.exports = app;