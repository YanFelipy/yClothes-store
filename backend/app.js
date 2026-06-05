//requires
const express = require('express')
const path = require('path')
const cors = require('cors');

const connectDB = require('./config/db'); // connection to db
const userRoutes = require('./routes/userRoutes'); // user route

const  port = 5000;
const app = express()

// config JSON and form data response

app.use(express.json())
app.use(cors())

connectDB();

app.listen( port, ()=> {
    console.log(`App rodando na porta: ${port}`)
}
)

app.get('/' , (req, res) => {

}
)

