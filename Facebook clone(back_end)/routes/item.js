const express = require('express');
const app = express();
const router = express.Router()

const Item = require('../models/item_models');

app.use(express.json())

router.get('/', async (req, res) => {
    // console.log('Get Request has come');
    // console.log(req.body);
    // res.send('Hello item!');

    try{
        const item = await Item.find();
        res.json(item);
        // res.send(item);
    }catch (err) {
        res.send('Err: ' + err);
    }
});

router.post('/', async (req, res) => {

    const item = new Item({
        code: req.body.code,
        description: req.body.description,
        price: req.body.price,
        qty: req.body.qty
    });

    try{
        const response = item.save();
        res.json(response);
        // res.send(response);
    }catch (err) {
        res.send('Err: ' + err);
    }

    // console.log(req.body);
    // res.send('<h2>Hello KITT</h2>');
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