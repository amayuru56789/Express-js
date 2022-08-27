const express = require('express');
const router = express.Router()

app.get('/item', (req, res) => {
    // console.log('Get Request has come');
    console.log(req.body);
    res.send('Hello item!');
});

app.post('/item', (req, res) => {
    console.log(req.body);
    res.send('<h2>Hello KITT</h2>');
})

app.delete('/item', (req, res) => {
    console.log(req.query.id);
    res.send('<h2>Hello KITT</h2>');
})

app.get('/item/:id', (req, res) => {
    console.log(req.params);
});

app.get('/item/:id', (req, res) => {
    console.log(req.query);
});

module.exports = router