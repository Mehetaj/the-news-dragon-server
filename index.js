const express = require('express');
const cors = require('cors')
const app = express();
const port = 3000;

const catagories = require('./Data/Catagories.json')

app.use(cors());

app.get('/' , (req , res ) => {
    res.send('Dragon is running')
})

app.get('/catagories' , (req , res) => {
    res.send(catagories)
})

app.listen(port , () => {
    console.log(`Dragon api running on ${port}`);
})