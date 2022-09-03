const express = require('express');
const { findById } = require('../models/item_models');
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

router.delete('/:id', async (req, res) => {
    try{
        const item = await Item.findById(req.params.id);
        const response = await item.remove();

        res.json(response);
    }catch(err) {
        res.send('Err: ' + err);
    }

    // console.log(req.query.id);
    // res.send('<h2>Hello KITT</h2>');
})

router.put('/:id', async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);
        item.code = req.body.code;
        item.description = req.body.description;
        item.price = req.body.price;
        item.qty = req.body.qty;

        const response = await item.save();
        res.json(response);

    } catch (err) {
        res.send('Err: ' + err);
    }
})

router.get('/:id', async (req, res) => {
    // console.log(req.params);

    try{
        const item = await Item.findById(req.params.id);
        res.json(item);
    }catch (err) {
        res.send('Err: ' + err);
    }
});

// app.get('/item/:id', (req, res) => {
//     console.log(req.query);
// });

module.exports = router