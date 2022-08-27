const express = require('express');
const router = express.Router()

app.get('/customer', (req, res) => {
    // console.log('Get Request has come');
    console.log(req.body);
    res.send('Hello Customer!');
});

app.post('/customer', (req, res) => {
    console.log(req.body);
    res.send('<h2>Hello KITT</h2>');
})

app.delete('/customer', (req, res) => {
    console.log(req.query.id);
    res.send('<h2>Hello KITT</h2>');
})

app.get('/customer/:id', (req, res) => {
    console.log(req.params);
});

app.get('/customer/:id', (req, res) => {
    console.log(req.query);
});

module.exports = router