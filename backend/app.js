const express = require('express')
const path = require('path')
const cors = require('cors');
const { send } = require('process');


const  port = 5000;

const app = express()

// config JSON and form data response

app.use(express.json())

app.listen( port, ()=> {
    console.log(`App rodando na porta: ${port}`)

})
