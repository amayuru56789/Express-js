const express = require('express');
const customer = require('./routes/customer');
const app = express();

const port = 4000;

// if we use json object inside our app.js
app.use(express.json());

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

