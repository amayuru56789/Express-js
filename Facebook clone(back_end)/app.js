const express = require('express');
const mongoose = require('mongoose');

// const customer = require('./routes/customer');
// const item = require('./routes/item');
const user = require('./routes/user');
const app = express();

const port = 4000;

const url = 'mongodb://localhost/express'

mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection

con.on("open", ()=> {
    console.log('MongoDB connected!');
})

// if we use json object inside our app.js
app.use(express.json());

// app.use('/customer', customer);
// app.use('/item', item);
app.use('/users', user);

app.get('/', (req, res) => {
    console.log('Get Request has come');
    res.send('Hello KITT!');
});

app.post('/', (req, res) => {
    res.send('<h2>Hello KITT</h2>');
})



app.get('/item', (req, res) => {
    //console.log('Get Request has come');
    res.send('Hello Item!');
});

app.listen(port, (req, res) => {
    console.log(`Express app listening on port ${port}`);
})

