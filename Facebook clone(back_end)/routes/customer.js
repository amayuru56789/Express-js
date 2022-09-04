const express = require('express');
const router = express.Router()

const app = express();
const Customer = require('../models/customer_models');

app.use(express.json())

router.get('/', async (req, res) => {
    try{
        const customer = await Customer.find();
        res.json(customer);
        // res.send(item);
    }catch (err) {
        res.send('Err: ' + err);
    }

    // console.log('Get Request has come');
    // console.log(req.body);
    // res.send('Hello Customer!');
});

router.post('/', async (req, res) => {
    const customer = new Customer({
        cid: req.body.cid,
        name: req.body.name,
        address: req.body.address,
        salary: req.body.salary
    });

    try{
        const response = customer.save();
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
        const customer = await Customer.findById(req.params.id);
        const response = await customer.remove();

        res.json(response);
    }catch(err) {
        res.send('Err: ' + err);
    }

    // console.log(req.query.id);
    // res.send('<h2>Hello KITT</h2>');
})

router.put('/:id', async (req, res) => {
    try {
        const customer = await Customer.findById(req.params.id);
        customer.cid = req.body.cid;
        customer.name = req.body.name;
        customer.address = req.body.address;
        customer.salary = req.body.salary;

        const response = await customer.save();
        res.json(response);

    } catch (err) {
        res.send('Err: ' + err);
    }
})

// app.get('/customer/:id', (req, res) => {
//     console.log(req.params);
// });

// app.get('/customer/:id', (req, res) => {
//     console.log(req.query);
// });

module.exports = router